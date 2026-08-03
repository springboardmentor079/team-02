// BuildTrack Backend Server (Connected to MongoDB Atlas)
const express = require('express');
const mongoose = require('mongoose');
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
app.set('etag', false);
app.use(express.json());
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..')));

const { protect } = require('./middleware/auth');

// Protect all API endpoints except authentication and health checks & disable caching
app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  if (req.path.startsWith('/auth') || req.path === '/health') {
    return next();
  }
  protect(req, res, next);
});

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
const Notification = require('./models/Notification');


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

    if (!name || !email || !password || !mobile) {
      return res.status(400).json({ success: false, msg: 'Please provide all required fields (name, email, mobile, password)' });
    }

    const cleanMobile = mobile.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Check for existing mobile number with another user
    const existingMobileUser = await User.findOne({ 
      mobile: cleanMobile,
      email: { $ne: cleanEmail }
    });

    if (existingMobileUser) {
      return res.status(400).json({ success: false, msg: 'A user with this mobile number is already registered' });
    }

    let user = await User.findOne({ email: cleanEmail });
    if (user) {
      // Seamlessly update credentials and activate user if re-registering
      user.name = name || user.name;
      user.password = password;
      user.role = role || user.role;
      user.mobile = cleanMobile;
      if (department) user.department = department;
      user.status = 'Active';
      await user.save();
    } else {
      user = await User.create({ name, email: cleanEmail, mobile: cleanMobile, password, role, department, status: 'Pending' });
    }
    
    const token = user.getSignedJwtToken();
    res.status(201).json({ success: true, token, user: { id: user._id, name: user.name, email: user.email, role: user.role, status: user.status, mobile: user.mobile } });
  } catch (err) {
    console.error('Error during registration:', err);
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern || {})[0] || 'Email or Mobile';
      return res.status(400).json({ success: false, msg: `A user with this ${field} already exists.` });
    }
    res.status(500).json({ success: false, error: err.message, msg: err.message });
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
    res.status(200).json({ 
      success: true, 
      count: users.length, 
      data: users.map(u => ({ 
        id: u._id, 
        _id: u._id, 
        name: u.name, 
        email: u.email, 
        mobile: u.mobile || '', 
        role: u.role, 
        department: u.department, 
        status: u.status || 'Active',
        avatar: u.avatar
      })) 
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST create new user (Admin / System creation)
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, mobile, password, role, department, status } = req.body;

    if (!name || !email || !mobile) {
      return res.status(400).json({ success: false, msg: 'Please provide name, email, and mobile number.' });
    }

    const cleanMobile = mobile.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Check duplicate email or mobile
    const existingUser = await User.findOne({
      $or: [{ email: cleanEmail }, { mobile: cleanMobile }]
    });

    if (existingUser) {
      const matchType = existingUser.email === cleanEmail ? 'Email' : 'Mobile number';
      return res.status(400).json({ success: false, msg: `${matchType} is already registered to another user.` });
    }

    const newUser = await User.create({
      name,
      email: cleanEmail,
      mobile: cleanMobile,
      password: password || 'password123',
      role: role || 'Worker',
      department: department || 'General',
      status: status || 'Active'
    });

    res.status(201).json({
      success: true,
      msg: 'User created successfully.',
      data: {
        id: newUser._id,
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile,
        role: newUser.role,
        department: newUser.department,
        status: newUser.status
      }
    });
  } catch (err) {
    console.error('Error creating user:', err);
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern || {})[0] || 'field';
      return res.status(400).json({ success: false, msg: `User with this ${field} already exists.` });
    }
    res.status(500).json({ success: false, error: err.message, msg: err.message });
  }
});

// UPDATE user details
app.put('/api/users/:id', async (req, res) => {
  try {
    const { name, email, mobile, role, department, status, password, requestingUserRole, requestingUserId } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }

    // Permission check for modifying user account details:
    // Only Administrator OR the account owner can modify user account details
    const isSelf = (requestingUserId && (requestingUserId === req.params.id || requestingUserId === user._id.toString())) || (req.user && req.user.id === req.params.id);
    const isAdmin = (requestingUserRole && requestingUserRole === 'Administrator') || (req.user && req.user.role === 'Administrator');

    if (!isAdmin && !isSelf) {
      return res.status(403).json({ 
        success: false, 
        msg: 'Permission denied: Only Administrators or the account owner can modify user account details.' 
      });
    }

    if (name) user.name = name;
    if (email) user.email = email.trim().toLowerCase();
    if (mobile) user.mobile = mobile.trim();
    if (role && isAdmin) user.role = role;
    if (department) user.department = department;
    if (status && isAdmin) user.status = status;
    if (password) user.password = password;

    await user.save();

    res.status(200).json({
      success: true,
      msg: 'User updated successfully',
      data: {
        id: user._id,
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        department: user.department,
        status: user.status
      }
    });
  } catch (err) {
    console.error('Error updating user:', err);
    if (err.code === 11000) {
      return res.status(400).json({ success: false, msg: 'Email or mobile number is already in use by another user.' });
    }
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }
    res.status(200).json({ success: true, msg: 'User deleted successfully', data: { id: user._id } });
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
    let items = await Inventory.find();
    const initialSeed = [
      { name: 'Portland Cement (Grade 53)', category: 'Cement', quantity: 2400, unit: 'Bags', threshold: 500, costPerUnit: 8 },
      { name: 'Reinforcement Steel Bars TMT', category: 'Steel', quantity: 15, unit: 'Tons', threshold: 5, costPerUnit: 750 },
      { name: 'Fly Ash Red Bricks', category: 'Bricks', quantity: 45000, unit: 'Units', threshold: 10000, costPerUnit: 0.15 },
      { name: 'River Building Sand', category: 'Sand', quantity: 180, unit: 'Tons', threshold: 50, costPerUnit: 40 },
      { name: 'Standard Grade Concrete aggregate', category: 'Concrete', quantity: 450, unit: 'Cu.m', threshold: 100, costPerUnit: 85 },
      { name: 'Copper Wires & Conduits (Electrical)', category: 'Electrical Materials', quantity: 120, unit: 'Coils', threshold: 30, costPerUnit: 60 },
      { name: 'PVC Drainage Pipes 4-inch', category: 'Plumbing Materials', quantity: 8, unit: 'Units', threshold: 25, costPerUnit: 18 }
    ];

    if (!items || items.length < 7) {
      for (const seedItem of initialSeed) {
        const exists = await Inventory.findOne({ name: seedItem.name });
        if (!exists) {
          await Inventory.create(seedItem);
        }
      }
      items = await Inventory.find();
    }
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    console.error('Error fetching inventory:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/inventory', async (req, res) => {
  try {
    const { name, category, quantity, unit, threshold, costPerUnit } = req.body;
    // Check if material with same name exists
    let item = await Inventory.findOne({ name });
    if (item) {
      item.quantity = quantity !== undefined ? parseFloat(quantity) : item.quantity;
      if (category) item.category = category;
      if (unit) item.unit = unit;
      if (threshold !== undefined) item.threshold = parseFloat(threshold);
      if (costPerUnit !== undefined) item.costPerUnit = parseFloat(costPerUnit);
      await item.save();
    } else {
      item = await Inventory.create({
        name,
        category: category || 'Cement',
        quantity: parseFloat(quantity) || 0,
        unit: unit || 'Units',
        threshold: parseFloat(threshold) || 10,
        costPerUnit: parseFloat(costPerUnit) || 0
      });
    }
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    console.error('Error saving inventory:', err);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.put('/api/inventory/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let item;
    if (mongoose.Types.ObjectId.isValid(id)) {
      item = await Inventory.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    }
    if (!item && req.body.name) {
      item = await Inventory.findOneAndUpdate({ name: req.body.name }, req.body, { new: true, runValidators: true });
    }
    if (!item) {
      item = await Inventory.create(req.body);
    }
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    console.error('Error updating inventory item:', err);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.delete('/api/inventory/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let item;
    if (mongoose.Types.ObjectId.isValid(id)) {
      item = await Inventory.findByIdAndDelete(id);
    } else {
      item = await Inventory.findOneAndDelete({ name: req.body.name });
    }
    res.status(200).json({ success: true, data: {}, msg: 'Material successfully deleted' });
  } catch (err) {
    console.error('Error deleting inventory item:', err);
    res.status(400).json({ success: false, error: err.message });
  }
});

// 6. WORKFORCE MANAGEMENT
app.get('/api/workers', async (req, res) => {
  try {
    const workers = await Worker.find().populate('currentProjectId', 'name');
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

app.get('/api/attendance', async (req, res) => {
  try {
    const { date } = req.query;
    let query = {};
    if (date) {
      const searchDate = new Date(date);
      const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
      const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));
      query.date = { $gte: startOfDay, $lte: endOfDay };
    }
    const attendance = await Attendance.find(query).populate('presentWorkers');
    res.status(200).json({ success: true, count: attendance.length, data: attendance });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/attendance', async (req, res) => {
  try {
    const { date, presentWorkers } = req.body;
    if (!date) {
      return res.status(400).json({ success: false, msg: 'Please provide a date' });
    }
    const searchDate = new Date(date);
    const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));
    
    let attendance = await Attendance.findOne({
      date: { $gte: startOfDay, $lte: endOfDay }
    });
    
    if (attendance) {
      attendance.presentWorkers = presentWorkers;
      await attendance.save();
    } else {
      attendance = await Attendance.create({ date, presentWorkers });
    }
    
    res.status(200).json({ success: true, data: attendance });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/attendance', async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ success: false, msg: 'Please provide a date' });
    }
    const searchDate = new Date(date);
    const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));
    
    await Attendance.deleteOne({
      date: { $gte: startOfDay, $lte: endOfDay }
    });
    
    res.status(200).json({ success: true, msg: 'Attendance cleared successfully' });
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

app.put('/api/procurements/:id', async (req, res) => {
  try {
    const po = await Procurement.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!po) return res.status(404).json({ success: false, msg: 'Purchase order not found' });
    res.status(200).json({ success: true, data: po });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/procurements/:id', async (req, res) => {
  try {
    const po = await Procurement.findByIdAndDelete(req.params.id);
    if (!po) return res.status(404).json({ success: false, msg: 'Purchase order not found' });
    res.status(200).json({ success: true, msg: 'Purchase order deleted successfully' });
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

// Extra Milestone 2 Endpoints

// 9. MILESTONES UPDATES
app.put('/api/milestones/:id', async (req, res) => {
  try {
    if (req.body.status === 'Completed' && !req.body.actualCompletionDate) {
      req.body.actualCompletionDate = new Date();
    } else if (req.body.status && req.body.status !== 'Completed') {
      req.body.actualCompletionDate = null;
    }
    const milestone = await Milestone.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!milestone) return res.status(404).json({ success: false, msg: 'Milestone not found' });
    
    // Proactively recalculate project progress if status changed
    if (req.body.status && milestone.projectId) {
      const allMilestones = await Milestone.find({ projectId: milestone.projectId });
      if (allMilestones.length > 0) {
        const completedCount = allMilestones.filter(m => m.status === 'Completed').length;
        const progress = Math.round((completedCount / allMilestones.length) * 100);
        await Project.findByIdAndUpdate(milestone.projectId, { progress });
      }
    }
    
    res.status(200).json({ success: true, data: milestone });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/milestones/:id', async (req, res) => {
  try {
    const milestone = await Milestone.findById(req.params.id);
    if (!milestone) return res.status(404).json({ success: false, msg: 'Milestone not found' });
    const projectId = milestone.projectId;
    await Milestone.findByIdAndDelete(req.params.id);
    
    // Proactively recalculate project progress
    if (projectId) {
      const allMilestones = await Milestone.find({ projectId });
      const completedCount = allMilestones.filter(m => m.status === 'Completed').length;
      const progress = allMilestones.length > 0 ? Math.round((completedCount / allMilestones.length) * 100) : 0;
      await Project.findByIdAndUpdate(projectId, { progress });
    }

    res.status(200).json({ success: true, msg: 'Milestone successfully deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 10. DAILY LOGS BY PROJECT
app.get('/api/projects/:projectId/progress-logs', async (req, res) => {
  try {
    const logs = await DailyLog.find({ projectId: req.params.projectId })
      .populate('projectId', 'name')
      .populate('supervisorId', 'name');
    res.status(200).json({ success: true, count: logs.length, data: logs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 11. BUDGET UPDATES
app.put('/api/budgets/:id', async (req, res) => {
  try {
    const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!budget) return res.status(404).json({ success: false, msg: 'Budget not found' });
    res.status(200).json({ success: true, data: budget });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/budgets/:id', async (req, res) => {
  try {
    const budget = await Budget.findByIdAndDelete(req.params.id);
    if (!budget) return res.status(404).json({ success: false, msg: 'Budget not found' });
    res.status(200).json({ success: true, msg: 'Budget successfully deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 12. MACHINERY / RESOURCE UPDATES
app.post('/api/resources', async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json({ success: true, data: resource });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/resources/:id', async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('currentProjectId', 'name');
    if (!resource) return res.status(404).json({ success: false, msg: 'Resource not found' });
    res.status(200).json({ success: true, data: resource });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/resources/:id', async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) return res.status(404).json({ success: false, msg: 'Resource not found' });
    res.status(200).json({ success: true, msg: 'Resource successfully deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 13. WORKER CRUD & ALLOCATIONS
app.put('/api/workers/:id', async (req, res) => {
  try {
    const worker = await Worker.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('currentProjectId', 'name');
    if (!worker) return res.status(404).json({ success: false, msg: 'Worker not found' });
    res.status(200).json({ success: true, data: worker });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/workers/:id', async (req, res) => {
  try {
    const worker = await Worker.findByIdAndDelete(req.params.id);
    if (!worker) return res.status(404).json({ success: false, msg: 'Worker not found' });
    res.status(200).json({ success: true, msg: 'Worker successfully deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/workers/:id/allocate', async (req, res) => {
  try {
    const { projectId } = req.body;
    const worker = await Worker.findByIdAndUpdate(req.params.id, {
      currentProjectId: projectId
    }, { new: true }).populate('currentProjectId', 'name');
    res.status(200).json({ success: true, data: worker });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/workers/:id/release', async (req, res) => {
  try {
    const worker = await Worker.findByIdAndUpdate(req.params.id, {
      currentProjectId: null
    }, { new: true });
    res.status(200).json({ success: true, data: worker });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


// 14. NOTIFICATIONS API
app.get('/api/notifications', async (req, res) => {
  try {
    const { search, category, priority, type, read, role } = req.query;
    let query = {};

    if (category && category !== 'all') {
      query.category = category;
    }
    if (priority && priority !== 'all') {
      query.priority = priority;
    }
    if (type && type !== 'all') {
      query.type = type;
    }
    if (read !== undefined && read !== 'all') {
      query.read = read === 'true';
    }
    if (role && role !== 'all') {
      query.$or = [{ recipientRole: 'all' }, { recipientRole: role.toLowerCase() }];
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } }
      ];
    }

    let notifications = await Notification.find(query).sort({ createdAt: -1 });
    
    // Seed default notifications if database has zero notifications overall
    const totalCount = await Notification.countDocuments();
    if (totalCount === 0) {
      const defaultNotifications = [
        {
          title: 'CRITICAL: UltraTech Portland Cement Low Stock',
          message: 'Portland Cement stock level (35 bags) dropped below minimum safety threshold (80 bags) at Warehouse Alpha.',
          type: 'danger',
          priority: 'urgent',
          category: 'inventory',
          recipientRole: 'all',
          channel: 'all',
          link: '/inventory'
        },
        {
          title: 'PO #PO-9401 Approval Pending',
          message: 'Purchase order #PO-9401 ($14,500.00) from SteelCorp International requires Site Manager authorization.',
          type: 'warning',
          priority: 'high',
          category: 'procurement',
          recipientRole: 'project manager',
          channel: 'in_app',
          link: '/procurement'
        },
        {
          title: 'Milestone Completed: Sector 4 Foundation',
          message: 'Foundation Pours on Horizon Tower Sector 4 marked 100% complete ahead of schedule.',
          type: 'success',
          priority: 'medium',
          category: 'milestone',
          recipientRole: 'all',
          channel: 'in_app',
          link: '/projects'
        },
        {
          title: 'Scheduled Maintenance: Heavy Excavator CAT-320',
          message: 'Excavator CAT-320 has logged 498 operational hours and is scheduled for 500hr oil & filter servicing.',
          type: 'info',
          priority: 'low',
          category: 'system',
          recipientRole: 'site engineer',
          channel: 'in_app',
          link: '/resources'
        },
        {
          title: 'Safety Audit Inspection Scheduled',
          message: 'OSHA compliance officer safety inspection scheduled for tomorrow at 09:00 AM on Site B.',
          type: 'warning',
          priority: 'high',
          category: 'general',
          recipientRole: 'all',
          channel: 'email',
          link: '/reports'
        }
      ];
      notifications = await Notification.insertMany(defaultNotifications);
    }
    
    res.status(200).json({ success: true, count: notifications.length, data: notifications });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET KPI Stats
app.get('/api/notifications/stats', async (req, res) => {
  try {
    const notifications = await Notification.find();
    const stats = {
      total: notifications.length,
      unread: notifications.filter(n => !n.read).length,
      urgent: notifications.filter(n => n.priority === 'urgent').length,
      high: notifications.filter(n => n.priority === 'high').length,
      inventory: notifications.filter(n => n.category === 'inventory').length,
      procurement: notifications.filter(n => n.category === 'procurement').length,
      milestones: notifications.filter(n => n.category === 'milestone').length,
      system: notifications.filter(n => n.category === 'system').length
    };
    res.status(200).json({ success: true, data: stats });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST Create Notification
app.post('/api/notifications', async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.status(201).json({ success: true, data: notification });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST Broadcast Notification
app.post('/api/notifications/broadcast', async (req, res) => {
  try {
    const { title, message, type, priority, category, recipientRole, channel, link } = req.body;
    
    const notification = await Notification.create({
      title,
      message,
      type: type || 'info',
      priority: priority || 'medium',
      category: category || 'general',
      recipientRole: recipientRole || 'all',
      channel: channel || 'in_app',
      link: link || ''
    });

    console.log(`[NOTIFICATION SERVICE] Broadcast sent to [Role: ${recipientRole || 'ALL'}, Channel: ${channel || 'IN_APP'}]: ${title}`);
    
    res.status(201).json({ 
      success: true, 
      msg: `Broadcast successfully dispatched via ${channel || 'in_app'}`, 
      data: notification 
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST Automated System Health Check / System Alerts Trigger
app.post('/api/notifications/trigger-system-alert', async (req, res) => {
  try {
    const createdAlerts = [];

    // 1. Check Inventory Low Stock
    const lowStockItems = await Inventory.find({
      $expr: { $lte: ['$quantity', '$minStockLevel'] }
    });

    for (const item of lowStockItems) {
      const existing = await Notification.findOne({
        title: `Low Stock: ${item.itemName}`,
        read: false
      });

      if (!existing) {
        const alert = await Notification.create({
          title: `Low Stock: ${item.itemName}`,
          message: `Item stock is down to ${item.quantity} ${item.unit} (Safety Threshold: ${item.minStockLevel || 50} ${item.unit}). Reorder required immediately.`,
          type: 'danger',
          priority: 'urgent',
          category: 'inventory',
          recipientRole: 'all',
          channel: 'all',
          link: '/inventory'
        });
        createdAlerts.push(alert);
      }
    }

    // 2. Check Pending Procurement Orders
    const pendingProcurements = await Procurement.find({ status: { $in: ['Pending', 'Pending Approval'] } });
    if (pendingProcurements.length > 0) {
      const existingPo = await Notification.findOne({
        title: 'Pending Purchase Orders Require Review',
        read: false
      });

      if (!existingPo) {
        const alert = await Notification.create({
          title: 'Pending Purchase Orders Require Review',
          message: `There are currently ${pendingProcurements.length} pending purchase orders awaiting managerial approval.`,
          type: 'warning',
          priority: 'high',
          category: 'procurement',
          recipientRole: 'project manager',
          channel: 'in_app',
          link: '/procurement'
        });
        createdAlerts.push(alert);
      }
    }

    // 3. Fallback system alert if no conditions met
    if (createdAlerts.length === 0) {
      const alert = await Notification.create({
        title: 'Automated System Diagnostics Complete',
        message: 'System audit performed at ' + new Date().toLocaleTimeString() + '. All site metrics and inventory levels operate within safety parameters.',
        type: 'success',
        priority: 'low',
        category: 'system',
        recipientRole: 'all',
        channel: 'in_app',
        link: '/reports'
      });
      createdAlerts.push(alert);
    }

    res.status(200).json({
      success: true,
      msg: `System audit generated ${createdAlerts.length} real-time notifications.`,
      data: createdAlerts
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/notifications/:id/read', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
    if (!notification) return res.status(404).json({ success: false, msg: 'Notification not found' });
    res.status(200).json({ success: true, data: notification });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/notifications/read-all', async (req, res) => {
  try {
    await Notification.updateMany({ read: false }, { read: true });
    res.status(200).json({ success: true, msg: 'All notifications marked as read' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/notifications/clear-read', async (req, res) => {
  try {
    await Notification.deleteMany({ read: true });
    res.status(200).json({ success: true, msg: 'All read notifications cleared successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/notifications/:id', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!notification) return res.status(404).json({ success: false, msg: 'Notification not found' });
    res.status(200).json({ success: true, msg: 'Notification deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 15. DASHBOARD ANALYTICS API
app.get('/api/analytics/dashboard', async (req, res) => {
  try {
    const [projects, inventory, procurements, workers, attendance] = await Promise.all([
      Project.find(),
      Inventory.find(),
      Procurement.find(),
      Worker.find(),
      Attendance.find()
    ]);

    const activeProjects = projects.filter(p => p.status === 'active' || p.status === 'in-progress').length;
    const completedProjects = projects.filter(p => p.status === 'completed').length;
    const totalBudget = projects.reduce((acc, p) => acc + (p.budget || 0), 0);
    
    const inventoryTotalValue = inventory.reduce((acc, i) => acc + ((i.quantity || 0) * (i.costPerUnit || 0)), 0);
    const lowStockCount = inventory.filter(i => (i.quantity || 0) <= (i.threshold || 0)).length;
    
    const poTotalSpent = procurements.reduce((acc, po) => acc + (po.totalAmount || 0), 0);
    const pendingPoCount = procurements.filter(po => po.status === 'Pending' || po.status === 'Draft').length;

    const totalWorkers = workers.length;
    let attendanceRate = 0;
    if (attendance.length > 0 && totalWorkers > 0) {
      const latestAttendance = attendance[attendance.length - 1];
      const presentCount = (latestAttendance.presentWorkers || []).length;
      attendanceRate = Math.round((presentCount / totalWorkers) * 100);
    } else {
      attendanceRate = 85;
    }

    const projectSpendChart = projects.map(p => ({
      name: p.name,
      budget: p.budget || 0,
      spent: Math.round((p.budget || 0) * ((p.progress || 0) / 100))
    }));

    const procurementCategoryMap = {};
    procurements.forEach(po => {
      const cat = po.category || 'General';
      procurementCategoryMap[cat] = (procurementCategoryMap[cat] || 0) + (po.totalAmount || 0);
    });

    res.status(200).json({
      success: true,
      data: {
        summary: {
          totalBudget,
          activeProjects,
          completedProjects,
          totalProjects: projects.length,
          inventoryTotalValue,
          lowStockCount,
          poTotalSpent,
          pendingPoCount,
          totalWorkers,
          attendanceRate
        },
        charts: {
          projectSpend: projectSpendChart,
          procurementCategories: procurementCategoryMap,
          projectStatuses: {
            active: activeProjects,
            completed: completedProjects,
            onHold: projects.filter(p => p.status === 'on-hold').length,
            cancelled: projects.filter(p => p.status === 'cancelled').length
          },
          inventoryStockStatus: {
            adequate: inventory.filter(i => (i.quantity || 0) > (i.threshold || 0)).length,
            lowStock: lowStockCount
          }
        }
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 16. REPORTING DATA HUB API
app.get('/api/reports/data', async (req, res) => {
  try {
    const { module: reportModule, startDate, endDate, status, search } = req.query;

    let dataset = [];
    let moduleName = reportModule || 'all';

    if (moduleName === 'procurement' || moduleName === 'all') {
      let pos = await Procurement.find();
      dataset.push(...pos.map(po => ({
        id: po._id,
        module: 'Procurement',
        title: (po.vendorName || 'Vendor') + ' (' + (po.category || 'General') + ')',
        category: po.category || 'General',
        reference: po.invoiceNo || ('PO-' + po._id.toString().slice(-4)),
        amount: po.totalAmount || 0,
        status: po.status || 'Approved',
        date: po.createdAt || po.date || new Date()
      })));
    }

    if (moduleName === 'projects' || moduleName === 'all') {
      let projects = await Project.find();
      dataset.push(...projects.map(p => ({
        id: p._id,
        module: 'Projects',
        title: p.name,
        category: p.client || 'Construction',
        reference: 'PROJ-' + p._id.toString().slice(-4),
        amount: p.budget || 0,
        status: p.status || 'Active',
        date: p.startDate || p.createdAt || new Date()
      })));
    }

    if (moduleName === 'inventory' || moduleName === 'all') {
      let items = await Inventory.find();
      dataset.push(...items.map(i => ({
        id: i._id,
        module: 'Inventory',
        title: i.name,
        category: i.category || 'Materials',
        reference: 'SKU-' + i._id.toString().slice(-4),
        amount: (i.quantity || 0) * (i.costPerUnit || 0),
        status: (i.quantity || 0) <= (i.threshold || 0) ? 'Low Stock' : 'Adequate',
        date: i.createdAt || new Date()
      })));
    }

    // Apply Filters
    if (status && status !== 'all') {
      dataset = dataset.filter(d => d.status.toLowerCase() === status.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      dataset = dataset.filter(d => 
        (d.title && d.title.toLowerCase().includes(q)) || 
        (d.reference && d.reference.toLowerCase().includes(q)) ||
        (d.category && d.category.toLowerCase().includes(q))
      );
    }

    if (startDate) {
      const start = new Date(startDate);
      dataset = dataset.filter(d => new Date(d.date) >= start);
    }

    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      dataset = dataset.filter(d => new Date(d.date) <= end);
    }

    res.status(200).json({
      success: true,
      count: dataset.length,
      data: dataset
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


// Wildcard fallback route for Angular client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
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
