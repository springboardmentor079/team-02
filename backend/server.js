const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment configurations
dotenv.config();

// Connect Mongoose Database
connectDB();

// SMS Gateway Integration Helper (Fast2SMS & Twilio)
const sendSMS = async (to, message) => {
  const cleanTo = to.replace(/\s+/g, '');
  
  // 1. Try Fast2SMS (Quick SMS - DLT Free for testing!)
  if (process.env.FAST2SMS_API_KEY) {
    try {
      console.log(`Attempting to send SMS to ${cleanTo} via Fast2SMS (Quick SMS)...`);
      const phoneNum = cleanTo.replace(/^\+91/, '').replace(/^0/, '');
      const otpCode = message.match(/\d{6}/)?.[0] || '123456';
      
      const smsMessage = encodeURIComponent(`Your BuildTrack OTP verification code is ${otpCode}. It is valid for 10 minutes.`);
      const url = `https://www.fast2sms.com/dev/bulkV2?authorization=${process.env.FAST2SMS_API_KEY}&route=q&message=${smsMessage}&numbers=${phoneNum}`;
      
      const https = require('https');
      return new Promise((resolve) => {
        https.get(url, (res) => {
          let body = '';
          res.on('data', chunk => body += chunk);
          res.on('end', () => {
            try {
              const resp = JSON.parse(body);
              if (resp.return) {
                console.log('Fast2SMS send successful:', resp);
                resolve(true);
              } else {
                console.error('Fast2SMS send failed:', resp);
                resolve(false);
              }
            } catch (jsonErr) {
              console.error('Fast2SMS response parse error:', jsonErr);
              resolve(false);
            }
          });
        }).on('error', err => {
          console.error('Fast2SMS connection error:', err);
          resolve(false);
        });
      });
    } catch (err) {
      console.error('Fast2SMS catch error:', err.message);
    }
  }

  // 2. Try Twilio
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
    try {
      console.log(`Attempting to send SMS to ${cleanTo} via Twilio...`);
      const twilio = require('twilio');
      const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
      const msg = await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: cleanTo.startsWith('+') ? cleanTo : `+91${cleanTo}`
      });
      console.log('Twilio SMS sent successfully, SID:', msg.sid);
      return true;
    } catch (err) {
      console.error('Twilio SMS send error:', err.message);
    }
  }

  console.log(`\n--- [SMS SIMULATOR] ---`);
  console.log(`To: ${cleanTo}`);
  console.log(`Message: ${message}`);
  console.log(`-----------------------\n`);
  return false;
};

const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text, html) => {
  let transporter;
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    const isGmail = process.env.EMAIL_USER.endsWith('@gmail.com') || (process.env.EMAIL_HOST && process.env.EMAIL_HOST.includes('gmail'));
    if (isGmail) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    } else {
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_PORT === '465',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    }
  } else {
    // Ethereal mock fallback
    console.log('No real SMTP credentials found. Creating mock Ethereal SMTP transporter...');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
  }

  try {
    const info = await transporter.sendMail({
      from: `"BuildTrack Platform" <${process.env.EMAIL_USER || 'no-reply@buildtrack.io'}>`,
      to,
      subject,
      text,
      html
    });

    console.log(`Email sent successfully to ${to}, msgId: ${info.messageId}`);
    if (!process.env.EMAIL_USER) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log(`Ethereal email preview link: ${previewUrl}`);
      return { success: true, otpSent: true, previewUrl };
    }
    return { success: true, otpSent: true };
  } catch (err) {
    console.error('Error sending email:', err.message);
    throw err;
  }
};

const path = require('path');
const app = express();

// Standard middlewares
app.use(express.json());
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../')));

// Simple testing ping endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// ============================================================================
// REST API ROUTING LAYER REFERENCES (EMULATED CONTROLLERS)
// ============================================================================

// Model schemas
const User = require('./models/User');
const Project = require('./models/Project');
const Milestone = require('./models/Milestone');
const Resource = require('./models/Resource');
const Inventory = require('./models/Inventory');
const Worker = require('./models/Worker');
const Attendance = require('./models/Attendance');
const Procurement = require('./models/Procurement');
const Budget = require('./models/Budget');
const DailyLog = require('./models/DailyLog');

// 1. JWT AUTH & USER MANAGEMENT
// Dynamic OTP Cache: mobile -> { otp, expires }
const tempOtps = {};

// 1. JWT AUTH & USER MANAGEMENT
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, mobile, password, role, department, securityCode } = req.body;
    
    if (securityCode !== '002') {
      return res.status(400).json({ success: false, msg: 'Invalid authorization code' });
    }

    let userByEmail = await User.findOne({ email });
    if (userByEmail) return res.status(400).json({ success: false, msg: 'Email is already registered' });

    // Flexible mobile uniqueness check
    if (mobile) {
      let searchMobile = mobile.replace(/\s+/g, '');
      if (!searchMobile.startsWith('+')) {
        searchMobile = searchMobile.startsWith('0') ? `+91${searchMobile.slice(1)}` : `+91${searchMobile}`;
      }
      let userByMobile = await User.findOne({
        $or: [
          { mobile: searchMobile },
          { mobile: searchMobile.replace('+91', '') },
          { mobile: `+91${searchMobile.replace('+91', '')}` }
        ]
      });
      if (userByMobile) {
        return res.status(400).json({ success: false, msg: 'Mobile number is already registered' });
      }
    }

    const user = await User.create({ name, email, mobile, password, role, department });
    
    const token = user.getSignedJwtToken();
    res.status(201).json({ success: true, token, user: { id: user._id, name, email, role, status: user.status } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, msg: 'Please provide email and password' });

    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(401).json({ success: false, msg: 'Invalid credentials' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ success: false, msg: 'Invalid credentials' });

    const token = user.getSignedJwtToken();
    res.status(200).json({ success: true, token, user: { id: user._id, name: user.name, email: user.email, role: user.role, status: user.status } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Send OTP via Email for registration or forgot-password
app.post('/api/auth/send-otp-email', async (req, res) => {
  try {
    const { email, type } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, msg: 'Please provide an email address' });
    }

    if (type === 'forgot-password') {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ success: false, msg: 'No user registered with this email address' });
      }
    } else {
      // Register type
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ success: false, msg: 'Email is already registered' });
      }
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    tempOtps[email] = {
      otp: generatedOtp,
      expires: Date.now() + 10 * 60 * 1000 // 10 minutes expiry
    };

    const subject = type === 'forgot-password' ? 'BuildTrack Password Reset OTP' : 'BuildTrack Email Verification OTP';
    const text = `Your BuildTrack OTP verification code is ${generatedOtp}. It is valid for 10 minutes.`;
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2>BuildTrack Security Clearance</h2>
        <p>You requested a verification code for BuildTrack Operations.</p>
        <p style="font-size: 20px; font-weight: bold; color: #4f46e5; letter-spacing: 2px;">${generatedOtp}</p>
        <p>This code is valid for 10 minutes. If you did not request this, please ignore this email.</p>
      </div>
    `;

    const emailRes = await sendEmail(email, subject, text, html);
    res.status(200).json({
      success: true,
      msg: 'Verification code sent to your email address.',
      otp: !process.env.EMAIL_USER ? generatedOtp : undefined,
      previewUrl: emailRes.previewUrl
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Forgot Password - Step 1: Request OTP by email ONLY
app.post('/api/auth/forgot-password', async (req, res) => {
  try {
    const { email, mobile } = req.body;
    if (!email && !mobile) {
      return res.status(400).json({ success: false, msg: 'Please provide an email address or mobile number' });
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    
    if (email) {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ success: false, msg: 'No user registered with this email address' });

      tempOtps[email] = {
        otp: generatedOtp,
        expires: Date.now() + 10 * 60 * 1000 // 10 minutes expiry
      };

      const subject = 'BuildTrack Password Reset OTP';
      const text = `Your BuildTrack password reset OTP is ${generatedOtp}.`;
      const html = `<p>Your password reset code is: <strong>${generatedOtp}</strong></p>`;
      const emailRes = await sendEmail(email, subject, text, html);
      
      return res.status(200).json({ 
        success: true, 
        msg: 'Verification code sent to your email address.',
        otp: !process.env.EMAIL_USER ? generatedOtp : undefined,
        previewUrl: emailRes.previewUrl
      });
    } else {
      let searchMobile = mobile.replace(/\s+/g, '');
      if (!searchMobile.startsWith('+')) {
        searchMobile = searchMobile.startsWith('0') ? `+91${searchMobile.slice(1)}` : `+91${searchMobile}`;
      }
      
      const user = await User.findOne({
        $or: [
          { mobile: searchMobile },
          { mobile: searchMobile.replace('+91', '') },
          { mobile: `+91${searchMobile.replace('+91', '')}` }
        ]
      });
      
      if (!user) {
        return res.status(404).json({ success: false, msg: 'No user registered with this mobile number' });
      }

      // Use searchMobile as the OTP cache key
      tempOtps[searchMobile] = {
        otp: generatedOtp,
        expires: Date.now() + 10 * 60 * 1000 // 10 minutes expiry
      };

      const message = `Your BuildTrack password reset OTP is ${generatedOtp}. It is valid for 10 minutes.`;
      const smsSent = await sendSMS(user.mobile || searchMobile, message);
      
      const isSmsConfigured = !!(process.env.FAST2SMS_API_KEY || (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER));
      
      return res.status(200).json({
        success: true,
        msg: 'Verification code sent to your mobile number.',
        otp: !isSmsConfigured ? generatedOtp : undefined
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Reset Password - Step 2: Validate OTP and set new password
app.post('/api/auth/reset-password', async (req, res) => {
  try {
    const { email, mobile, otp, password } = req.body;
    if ((!email && !mobile) || !otp || !password) {
      return res.status(400).json({ success: false, msg: 'Please provide all details (email or mobile, otp, password)' });
    }

    let cacheKey = email;
    let user;

    if (email) {
      const cached = tempOtps[email];
      if (!cached) {
        return res.status(400).json({ success: false, msg: 'No OTP requested or OTP has expired. Please request a new OTP.' });
      }

      if (cached.expires < Date.now()) {
        delete tempOtps[email];
        return res.status(400).json({ success: false, msg: 'OTP has expired. Please request a new OTP.' });
      }

      if (cached.otp !== otp) {
        return res.status(400).json({ success: false, msg: 'Invalid verification code. Please check and try again.' });
      }

      user = await User.findOne({ email });
      if (!user) return res.status(404).json({ success: false, msg: 'User not found' });
    } else {
      let searchMobile = mobile.replace(/\s+/g, '');
      if (!searchMobile.startsWith('+')) {
        searchMobile = searchMobile.startsWith('0') ? `+91${searchMobile.slice(1)}` : `+91${searchMobile}`;
      }

      const cached = tempOtps[searchMobile];
      if (!cached) {
        return res.status(400).json({ success: false, msg: 'No OTP requested or OTP has expired. Please request a new OTP.' });
      }

      if (cached.expires < Date.now()) {
        delete tempOtps[searchMobile];
        return res.status(400).json({ success: false, msg: 'OTP has expired. Please request a new OTP.' });
      }

      if (cached.otp !== otp) {
        return res.status(400).json({ success: false, msg: 'Invalid verification code. Please check and try again.' });
      }

      user = await User.findOne({
        $or: [
          { mobile: searchMobile },
          { mobile: searchMobile.replace('+91', '') },
          { mobile: `+91${searchMobile.replace('+91', '')}` }
        ]
      });
      if (!user) return res.status(404).json({ success: false, msg: 'User not found' });
      cacheKey = searchMobile;
    }

    user.password = password;
    await user.save();

    delete tempOtps[cacheKey];
    res.status(200).json({ success: true, msg: 'Password reset successful. Please log in.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, count: users.length, data: users.map(u => ({ id: u._id, name: u.name, email: u.email, role: u.role, department: u.department, status: u.status })) });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Approve user registration
app.put('/api/users/:id/approve', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { status: 'Active' }, { new: true });
    if (!user) return res.status(404).json({ success: false, msg: 'User not found' });
    res.status(200).json({ success: true, data: { id: user._id, name: user.name, email: user.email, role: user.role, status: user.status, mobile: user.mobile } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Decline user registration
app.put('/api/users/:id/decline', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ success: false, msg: 'User not found' });
    res.status(200).json({ success: true, data: { id: user._id, name: user.name, email: user.email, role: user.role, status: 'Inactive', mobile: user.mobile } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2. PROJECT MANAGEMENT ENDPOINTS
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().populate('projectManager', 'name email');
    res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('projectManager', 'name email');
    if (!project) {
      return res.status(404).json({ success: false, msg: 'Project not found' });
    }
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!project) {
      return res.status(404).json({ success: false, msg: 'Project not found' });
    }
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, msg: 'Project not found' });
    }
    res.status(200).json({ success: true, data: {}, msg: 'Project successfully deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/projects/:projectId/milestones', async (req, res) => {
  try {
    const milestones = await Milestone.find({ projectId: req.params.projectId });
    res.status(200).json({ success: true, count: milestones.length, data: milestones });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/projects/:projectId/milestones', async (req, res) => {
  try {
    req.body.projectId = req.params.projectId;
    const milestone = await Milestone.create(req.body);
    res.status(201).json({ success: true, data: milestone });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. SITE PROGRESS LOGS ENDPOINTS
app.get('/api/progress-logs', async (req, res) => {
  try {
    const logs = await DailyLog.find().populate('projectId', 'name').populate('supervisorId', 'name');
    res.status(200).json({ success: true, count: logs.length, data: logs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/progress-logs', async (req, res) => {
  try {
    const log = await DailyLog.create(req.body);
    res.status(201).json({ success: true, data: log });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. RESOURCE ALLOCATION & MACHINERY
app.get('/api/resources', async (req, res) => {
  try {
    const resources = await Resource.find().populate('currentProjectId', 'name');
    res.status(200).json({ success: true, count: resources.length, data: resources });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/resources/:id/allocate', async (req, res) => {
  try {
    const { projectId } = req.body;
    const resource = await Resource.findByIdAndUpdate(req.params.id, {
      status: 'Allocated',
      currentProjectId: projectId
    }, { new: true });
    res.status(200).json({ success: true, data: resource });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/resources/:id/release', async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, {
      status: 'Available',
      currentProjectId: null
    }, { new: true });
    res.status(200).json({ success: true, data: resource });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. MATERIAL & INVENTORY
app.get('/api/inventory', async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/inventory/:id', async (req, res) => {
  try {
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. WORKFORCE MANAGEMENT
app.get('/api/workers', async (req, res) => {
  try {
    const workers = await Worker.find();
    res.status(200).json({ success: true, count: workers.length, data: workers });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/workers', async (req, res) => {
  try {
    const worker = await Worker.create(req.body);
    res.status(201).json({ success: true, data: worker });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/attendance', async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json({ success: true, data: attendance });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. PROCUREMENT & PURCHASE ORDERS
app.get('/api/procurements', async (req, res) => {
  try {
    const procurements = await Procurement.find();
    res.status(200).json({ success: true, count: procurements.length, data: procurements });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/procurements', async (req, res) => {
  try {
    const po = await Procurement.create(req.body);
    res.status(201).json({ success: true, data: po });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 8. BUDGET & COST ESTIMATIONS
app.get('/api/projects/:projectId/budgets', async (req, res) => {
  try {
    const budgets = await Budget.find({ projectId: req.params.projectId });
    res.status(200).json({ success: true, count: budgets.length, data: budgets });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/projects/:projectId/budgets', async (req, res) => {
  try {
    req.body.projectId = req.params.projectId;
    const budget = await Budget.create(req.body);
    res.status(201).json({ success: true, data: budget });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


// Global Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: err.message
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`BuildTrack Backend running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
