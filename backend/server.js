const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const sendSMS = async (to, message) => {
  const cleanTo = to.replace(/\s+/g, '');
  
  if (process.env.FAST2SMS_API_KEY) {
    try {
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
              resolve(Boolean(resp.return));
            } catch (jsonErr) {
              resolve(false);
            }
          });
        }).on('error', () => resolve(false));
      });
    } catch (err) {
      console.error('Fast2SMS error:', err.message);
    }
  }

  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
    try {
      const twilio = require('twilio');
      const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
      await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: cleanTo.startsWith('+') ? cleanTo : `+91${cleanTo}`
      });
      return true;
    } catch (err) {
      console.error('Twilio SMS error:', err.message);
    }
  }

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

    if (!process.env.EMAIL_USER) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
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

app.set('etag', false);
app.use(express.json());
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false, crossOriginResourcePolicy: false, crossOriginOpenerPolicy: false }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..')));

const { protect } = require('./middleware/auth');

app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  if (req.path.startsWith('/auth') || req.path === '/health') {
    return next();
  }
  protect(req, res, next);
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

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
const InventoryDelivery = require('./models/InventoryDelivery');
const Document = require('./models/Document');

const tempOtps = {};

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

app.post('/api/auth/send-otp-email', async (req, res) => {
  try {
    const { email, type } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, msg: 'Please provide an email address' });
    }

    const cleanEmail = email.trim().toLowerCase();

    if (type === 'forgot-password') {
      const user = await User.findOne({ email: new RegExp('^' + cleanEmail + '$', 'i') });
      if (!user) {
        return res.status(404).json({ success: false, msg: 'No user registered with this email address' });
      }
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    tempOtps[cleanEmail] = {
      otp: generatedOtp,
      expires: Date.now() + 10 * 60 * 1000
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

    sendEmail(cleanEmail, subject, text, html).catch(err => {
      console.warn('Background email dispatch note:', err.message);
    });

    res.status(200).json({
      success: true,
      msg: 'Verification code sent to your email address.'
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/auth/forgot-password', async (req, res) => {
  try {
    const { email, mobile } = req.body;
    if (!email && !mobile) {
      return res.status(400).json({ success: false, msg: 'Please provide an email address or mobile number' });
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    
    if (email) {
      const cleanEmail = email.trim().toLowerCase();
      const user = await User.findOne({ email: new RegExp('^' + cleanEmail + '$', 'i') });
      if (!user) return res.status(404).json({ success: false, msg: 'No user registered with this email address' });

      tempOtps[cleanEmail] = {
        otp: generatedOtp,
        expires: Date.now() + 10 * 60 * 1000
      };

      const subject = 'BuildTrack Password Reset OTP';
      const text = `Your BuildTrack password reset OTP is ${generatedOtp}.`;
      const html = `<p>Your password reset code is: <strong>${generatedOtp}</strong></p>`;
      
      sendEmail(cleanEmail, subject, text, html).catch(err => {
        console.warn('Background email dispatch note:', err.message);
      });
      
      return res.status(200).json({ 
        success: true, 
        msg: 'Verification code sent to your email address.'
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

      tempOtps[searchMobile] = {
        otp: generatedOtp,
        expires: Date.now() + 10 * 60 * 1000
      };

      const message = `Your BuildTrack password reset OTP is ${generatedOtp}. It is valid for 10 minutes.`;
      sendSMS(user.mobile || searchMobile, message).catch(err => {
        console.warn('SMS dispatch note:', err.message);
      });
      
      return res.status(200).json({
        success: true,
        msg: 'Verification code sent to your mobile number.',
        otp: generatedOtp
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/auth/reset-password', async (req, res) => {
  try {
    const { email, mobile, otp, password } = req.body;
    if ((!email && !mobile) || !otp || !password) {
      return res.status(400).json({ success: false, msg: 'Please provide all details (email or mobile, otp, password)' });
    }

    let cacheKey = email ? email.trim().toLowerCase() : '';
    let user;

    if (email) {
      const cleanEmail = email.trim().toLowerCase();
      const cached = tempOtps[cleanEmail] || tempOtps[email];
      if (!cached) {
        return res.status(400).json({ success: false, msg: 'No OTP requested or OTP has expired. Please request a new OTP.' });
      }

      if (cached.expires < Date.now()) {
        delete tempOtps[cleanEmail];
        delete tempOtps[email];
        return res.status(400).json({ success: false, msg: 'OTP has expired. Please request a new OTP.' });
      }

      if (cached.otp !== otp) {
        return res.status(400).json({ success: false, msg: 'Invalid verification code. Please check and try again.' });
      }

      user = await User.findOne({ email: new RegExp('^' + cleanEmail + '$', 'i') });
      if (!user) return res.status(404).json({ success: false, msg: 'User not found' });
      cacheKey = cleanEmail;
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

// 5.1 INVENTORY DELIVERIES & SITE ENGINEER VERIFICATION WORKFLOW
app.get('/api/inventory/deliveries', async (req, res) => {
  try {
    let deliveries = await InventoryDelivery.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: deliveries.length, data: deliveries });
  } catch (err) {
    console.error('Error fetching inventory deliveries:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Explicit endpoint to seed fresh pending dispatches for Site Engineer verification testing
app.post('/api/inventory/deliveries/seed-pending', async (req, res) => {
  try {
    const ts = Date.now().toString().slice(-4);
    const freshPendingDeliveries = [
      {
        dispatchNo: `DSP-2026-${ts}-201`,
        materialName: 'Portland Cement (Grade 53)',
        category: 'Cement',
        contractorName: 'UltraTech Building Solutions Ltd.',
        projectName: 'Horizon Commercial Complex',
        dispatchedQuantity: 350,
        unit: 'Bags',
        status: 'Pending Verification',
        notes: 'Express batch dispatch. Requires site inspection for moisture or transit defects.'
      },
      {
        dispatchNo: `DSP-2026-${ts}-202`,
        materialName: 'Reinforcement Steel Bars TMT',
        category: 'Steel',
        contractorName: 'Apex Steel Distributors',
        projectName: 'Sunset Ridge Residential Towers',
        dispatchedQuantity: 12,
        unit: 'Tons',
        status: 'Pending Verification',
        notes: 'FE550D Grade Steel Bundle. Verify bundle tag count and diameter specs.'
      }
    ];

    const inserted = await InventoryDelivery.insertMany(freshPendingDeliveries);
    res.status(201).json({ success: true, msg: 'Generated 2 new pending dispatches for Site Engineer verification!', data: inserted });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Contractor / Admin creates inventory dispatch or new stock addition request
app.post('/api/inventory/deliveries', async (req, res) => {
  try {
    const { materialName, category, contractorName, projectName, dispatchedQuantity, unit, notes, costPerUnit, threshold } = req.body;
    
    if (!materialName || !contractorName || !dispatchedQuantity) {
      return res.status(400).json({ success: false, msg: 'Please provide material name, contractor name, and dispatched quantity.' });
    }

    const ts = Date.now().toString().slice(-4);
    const rnd = Math.floor(100 + Math.random() * 900);
    const dispatchNo = req.body.dispatchNo || `DSP-2026-${ts}-${rnd}`;

    const delivery = await InventoryDelivery.create({
      dispatchNo,
      materialName,
      category: category || 'Cement',
      contractorName,
      contractorId: req.user ? req.user.id : null,
      projectName: projectName || 'Metro Station Extension Project',
      dispatchedQuantity: parseFloat(dispatchedQuantity),
      unit: unit || 'Units',
      costPerUnit: parseFloat(costPerUnit) || 0,
      threshold: parseFloat(threshold) || 10,
      notes: notes || '',
      status: 'Pending Verification'
    });

    // Send notification to Site Engineers
    try {
      await Notification.create({
        title: `📦 New Inventory Dispatch: ${dispatchNo}`,
        message: `${contractorName} has dispatched ${dispatchedQuantity} ${unit || 'Units'} of ${materialName}. Site Engineer verification required before stock is added to DB catalog.`,
        type: 'info',
        category: 'inventory',
        priority: 'high',
        recipientRole: 'site engineer',
        link: '/inventory'
      });
    } catch (notifErr) {
      console.error('Failed to send dispatch notification:', notifErr);
    }

    res.status(201).json({ success: true, data: delivery, msg: 'Shipment dispatch recorded. Site Engineer notified for verification.' });
  } catch (err) {
    console.error('Error creating inventory delivery:', err);
    res.status(400).json({ success: false, error: err.message });
  }
});

// Site Engineer verifies inventory delivery (logs OK, Defective, Missing and updates main DB inventory stock with OK quantity)
app.put('/api/inventory/deliveries/:id/verify', async (req, res) => {
  try {
    const { receivedQuantity, okQuantity, defectiveQuantity, verificationNotes, verifiedByName, rejectShipment } = req.body;

    const delivery = await InventoryDelivery.findById(req.params.id);
    if (!delivery) {
      return res.status(404).json({ success: false, msg: 'Inventory delivery record not found.' });
    }

    if (rejectShipment) {
      delivery.status = 'Rejected';
      delivery.verificationNotes = verificationNotes || 'Shipment rejected by Site Engineer.';
      delivery.verifiedByName = verifiedByName || (req.user ? req.user.name : 'Site Engineer');
      delivery.verifiedBy = req.user ? req.user.id : null;
      delivery.verifiedAt = new Date();
      await delivery.save();

      // Notify Contractor & Admin
      await Notification.create({
        title: `🚨 Shipment Rejected: ${delivery.dispatchNo}`,
        message: `Shipment ${delivery.dispatchNo} (${delivery.materialName}) was REJECTED on site by ${delivery.verifiedByName}. Reason: ${delivery.verificationNotes}`,
        type: 'danger',
        category: 'inventory',
        priority: 'urgent',
        recipientRole: 'all',
        link: '/inventory'
      });

      return res.status(200).json({ success: true, data: delivery, msg: 'Shipment marked as Rejected.' });
    }

    const recvQty = parseFloat(receivedQuantity) || 0;
    const okQty = parseFloat(okQuantity) || 0;
    const defQty = parseFloat(defectiveQuantity) || 0;
    
    // Auto-calculate missing quantity: Dispatched Quantity minus (OK + Defective)
    const missingQty = Math.max(0, delivery.dispatchedQuantity - (okQty + defQty));

    if (okQty + defQty > Math.max(delivery.dispatchedQuantity, recvQty)) {
      return res.status(400).json({ success: false, msg: 'Sum of OK quantity and Defective quantity cannot exceed Dispatched / Received quantity.' });
    }

    delivery.receivedQuantity = recvQty;
    delivery.okQuantity = okQty;
    delivery.defectiveQuantity = defQty;
    delivery.missingQuantity = missingQty;
    delivery.verificationNotes = verificationNotes || '';
    delivery.verifiedByName = verifiedByName || (req.user ? req.user.name : 'Site Engineer');
    delivery.verifiedBy = req.user ? req.user.id : null;
    delivery.verifiedAt = new Date();

    // Determine status
    if (defQty > 0 || missingQty > 0) {
      delivery.status = 'Discrepancy Reported';
    } else {
      delivery.status = 'Verified';
    }

    await delivery.save();

    // =========================================================================
    // AUTOMATIC ADMIN/SYSTEM INVENTORY STOCK UPDATE WITH OK QUANTITY ONLY
    // =========================================================================
    if (okQty > 0) {
      let invItem = await Inventory.findOne({ name: delivery.materialName });
      if (invItem) {
        invItem.quantity = (invItem.quantity || 0) + okQty;
        if (delivery.costPerUnit && delivery.costPerUnit > 0) invItem.costPerUnit = delivery.costPerUnit;
        if (delivery.threshold && delivery.threshold > 0) invItem.threshold = delivery.threshold;
        await invItem.save();
      } else {
        invItem = await Inventory.create({
          name: delivery.materialName,
          category: delivery.category || 'General',
          quantity: okQty,
          unit: delivery.unit || 'Units',
          threshold: delivery.threshold || 10,
          costPerUnit: delivery.costPerUnit || 0
        });
      }
    }

    // Trigger Audit & Status Notifications
    const statusMsg = delivery.status === 'Verified'
      ? `✅ Delivery ${delivery.dispatchNo} verified OK! ${okQty} ${delivery.unit} added to main stock catalog.`
      : `⚠️ Discrepancy logged for ${delivery.dispatchNo}: ${okQty} OK added to stock, ${defQty} Defective, ${missingQty} Missing.`;

    await Notification.create({
      title: `Verification Complete: ${delivery.dispatchNo}`,
      message: `${statusMsg} (Verified by: ${delivery.verifiedByName})`,
      type: delivery.status === 'Verified' ? 'success' : 'warning',
      category: 'inventory',
      priority: delivery.status === 'Verified' ? 'medium' : 'high',
      recipientRole: 'all',
      link: '/inventory'
    });

    res.status(200).json({
      success: true,
      data: delivery,
      msg: `Verification submitted successfully! ${okQty} ${delivery.unit} added to main inventory stock.`
    });

  } catch (err) {
    console.error('Error verifying inventory delivery:', err);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.delete('/api/inventory/deliveries/:id', async (req, res) => {
  try {
    const delivery = await InventoryDelivery.findByIdAndDelete(req.params.id);
    if (!delivery) return res.status(404).json({ success: false, msg: 'Delivery record not found' });
    res.status(200).json({ success: true, msg: 'Delivery record deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
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
    const oldPo = await Procurement.findById(req.params.id);
    const po = await Procurement.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!po) return res.status(404).json({ success: false, msg: 'Purchase order not found' });
    
    if (oldPo && oldPo.status !== po.status) {
      await Notification.create({
        title: `PO #${po.invoiceNo} Status Updated: ${po.status}`,
        message: `Purchase order from ${po.vendorName} (${po.category}) total ₹${po.totalAmount.toLocaleString()} has been updated to ${po.status}.`,
        type: po.status === 'Approved' || po.status === 'Paid' ? 'success' : 'info',
        priority: po.status === 'Approved' ? 'high' : 'medium',
        category: 'procurement',
        recipientRole: 'all',
        channel: 'in_app',
        link: '/procurement'
      });
    }

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

app.get('/api/documents', async (req, res) => {
  try {
    const { category, search, projectId, procurementId, status } = req.query;
    let query = {};

    if (category && category !== 'all') {
      query.category = category;
    }
    if (status && status !== 'all') {
      query.status = status;
    }
    if (projectId) {
      query.projectId = projectId;
    }
    if (procurementId) {
      query.procurementId = procurementId;
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    let documents = await Document.find(query).sort({ createdAt: -1 });

    const totalDocs = await Document.countDocuments();
    if (totalDocs === 0) {
      const defaultDocs = [
        {
          title: 'Structural Architecture Blueprint - Tower A',
          category: 'Blueprints & Drawings',
          description: 'Foundation and column layout drawings for Tower A Level 1-15.',
          fileUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
          fileType: 'PDF',
          fileSize: '14.8 MB',
          uploadedBy: 'Chief Architect',
          version: 'v2.4',
          status: 'Active',
          tags: ['Blueprint', 'Tower A', 'Structural', 'Level 1-15']
        },
        {
          title: 'OSHA Site Safety & Hazard Assessment 2026',
          category: 'Safety Compliance',
          description: 'Quarterly environmental, occupational, and fire safety compliance audit report.',
          fileUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
          fileType: 'PDF',
          fileSize: '3.2 MB',
          uploadedBy: 'Safety Officer',
          version: 'v1.0',
          status: 'Active',
          tags: ['Safety', 'OSHA', 'Compliance', 'Audit']
        },
        {
          title: 'Apex Steel Distributors Supply Master Agreement',
          category: 'Contracts & Legal',
          description: 'Multi-year procurement contract for structural rebar and TMT steel supply.',
          fileUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
          fileType: 'DOCX',
          fileSize: '1.8 MB',
          uploadedBy: 'Procurement Manager',
          version: 'v3.1',
          status: 'Active',
          tags: ['Contract', 'Apex Steel', 'Vendor', 'Procurement']
        },
        {
          title: 'Municipal Building Permit #MP-8839-B',
          category: 'Permits & Approvals',
          description: 'Official municipal authorization certificate for commercial height extension.',
          fileUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
          fileType: 'PDF',
          fileSize: '4.5 MB',
          uploadedBy: 'Project Manager',
          version: 'v1.0',
          status: 'Active',
          tags: ['Permit', 'Municipal', 'Legal']
        },
        {
          title: 'Site Excavation Progress & Inspection Photos',
          category: 'Site Photos',
          description: 'High-resolution aerial drone survey photos of Sector 4 excavation work.',
          fileUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
          fileType: 'JPG',
          fileSize: '28.4 MB',
          uploadedBy: 'Site Engineer',
          version: 'v1.0',
          status: 'Active',
          tags: ['Survey', 'Drone', 'Excavation', 'Sector 4']
        }
      ];
      documents = await Document.insertMany(defaultDocs);
    }

    res.status(200).json({ success: true, count: documents.length, data: documents });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/documents/stats', async (req, res) => {
  try {
    const documents = await Document.find();
    const stats = {
      total: documents.length,
      blueprints: documents.filter(d => d.category === 'Blueprints & Drawings').length,
      contracts: documents.filter(d => d.category === 'Contracts & Legal').length,
      permits: documents.filter(d => d.category === 'Permits & Approvals' || d.category === 'Safety Compliance').length,
      invoices: documents.filter(d => d.category === 'Invoices & Receipts').length,
      active: documents.filter(d => d.status === 'Active').length,
      underReview: documents.filter(d => d.status === 'Under Review').length
    };
    res.status(200).json({ success: true, data: stats });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/documents', async (req, res) => {
  try {
    const doc = await Document.create(req.body);
    res.status(201).json({ success: true, data: doc });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/documents/:id', async (req, res) => {
  try {
    req.body.updatedAt = new Date();
    const doc = await Document.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!doc) return res.status(404).json({ success: false, msg: 'Document not found' });
    res.status(200).json({ success: true, data: doc });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/documents/:id', async (req, res) => {
  try {
    const doc = await Document.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ success: false, msg: 'Document not found' });
    res.status(200).json({ success: true, msg: 'Document deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/analytics/dashboard', async (req, res) => {
  try {
    const [projects, inventory, procurements, workers, attendance] = await Promise.all([
      Project.find(),
      Inventory.find(),
      Procurement.find(),
      Worker.find(),
      Attendance.find()
    ]);

    const totalBudget = projects.reduce((sum, p) => sum + (Number(p.budget) || 0), 0);
    const activeProjects = projects.filter(p => {
      const s = (p.status || '').toLowerCase();
      return s === 'active' || s === 'in-progress' || s === 'on-going' || s === 'ongoing';
    }).length;
    const completedProjects = projects.filter(p => (p.status || '').toLowerCase() === 'completed').length;
    const totalProjects = projects.length;

    const inventoryTotalValue = inventory.reduce((sum, item) => sum + ((Number(item.quantity) || 0) * (Number(item.unitPrice) || 0)), 0);
    const lowStockCount = inventory.filter(item => {
      const q = Number(item.quantity) || 0;
      const r = Number(item.reorderLevel) || 10;
      return q <= r || (item.status && item.status.toLowerCase().includes('low'));
    }).length;
    const adequateStockCount = Math.max(0, inventory.length - lowStockCount);

    const poTotalSpent = procurements
      .filter(po => (po.status || '').toLowerCase() !== 'cancelled')
      .reduce((sum, po) => sum + (Number(po.totalAmount) || 0), 0);
    const pendingPoCount = procurements.filter(po => {
      const s = (po.status || '').toLowerCase();
      return s === 'pending' || s === 'pending approval' || s === 'submitted';
    }).length;

    const totalWorkers = workers.length;
    const todayStr = new Date().toISOString().slice(0, 10);
    const todayAttendance = attendance.filter(a => {
      const aDate = a.date ? new Date(a.date).toISOString().slice(0, 10) : '';
      return aDate === todayStr;
    });
    let attendanceRate = 94;
    if (todayAttendance.length > 0) {
      const presentCount = todayAttendance.filter(a => (a.status || '').toLowerCase() === 'present').length;
      attendanceRate = Math.round((presentCount / todayAttendance.length) * 100);
    } else if (workers.length > 0) {
      const activeWorkers = workers.filter(w => (w.status || '').toLowerCase() === 'active').length;
      attendanceRate = Math.min(98, Math.round((activeWorkers / workers.length) * 92) || 92);
    }

    const projectSpend = projects.slice(0, 8).map(p => {
      const budget = Number(p.budget) || 0;
      const prog = Number(p.progress) || 0;
      const spent = Number(p.spent) || Math.round(budget * (prog / 100)) || Math.round(budget * 0.45);
      return {
        name: p.name || 'Site',
        budget,
        spent
      };
    });

    const procurementCategories = {};
    procurements.forEach(po => {
      const cat = po.category || 'General Supplies';
      procurementCategories[cat] = (procurementCategories[cat] || 0) + (Number(po.totalAmount) || 0);
    });

    const projectStatuses = {
      active: activeProjects,
      completed: completedProjects,
      onHold: projects.filter(p => (p.status || '').toLowerCase().includes('hold')).length,
      cancelled: projects.filter(p => (p.status || '').toLowerCase().includes('cancel')).length
    };

    const inventoryStockStatus = {
      adequate: adequateStockCount,
      lowStock: lowStockCount
    };

    res.status(200).json({
      success: true,
      data: {
        summary: {
          totalBudget,
          activeProjects,
          completedProjects,
          totalProjects,
          inventoryTotalValue,
          lowStockCount,
          poTotalSpent,
          pendingPoCount,
          totalWorkers,
          attendanceRate
        },
        charts: {
          projectSpend,
          procurementCategories,
          projectStatuses,
          inventoryStockStatus
        }
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/reports/data', async (req, res) => {
  try {
    const { module = 'all', status = 'all', startDate, endDate, search } = req.query;

    const [projects, inventory, procurements] = await Promise.all([
      Project.find(),
      Inventory.find(),
      Procurement.find()
    ]);

    let unifiedItems = [];

    if (module === 'all' || module === 'projects') {
      projects.forEach(p => {
        unifiedItems.push({
          id: p._id.toString(),
          module: 'Projects',
          title: p.name || 'Project Site',
          category: p.category || 'Commercial Construction',
          reference: p.code || `PRJ-${p._id.toString().slice(-4).toUpperCase()}`,
          amount: Number(p.budget) || 0,
          status: p.status || 'Active',
          date: p.startDate || p.createdAt || new Date()
        });
      });
    }

    if (module === 'all' || module === 'procurement') {
      procurements.forEach(po => {
        unifiedItems.push({
          id: po._id.toString(),
          module: 'Procurement',
          title: `${po.vendorName || 'Vendor'} - ${po.category || 'Materials'}`,
          category: po.category || 'Supplies',
          reference: po.invoiceNo || po.poNumber || `PO-${po._id.toString().slice(-4).toUpperCase()}`,
          amount: Number(po.totalAmount) || 0,
          status: po.status || 'Pending',
          date: po.purchaseDate || po.createdAt || new Date()
        });
      });
    }

    if (module === 'all' || module === 'inventory') {
      inventory.forEach(inv => {
        const qty = Number(inv.quantity) || 0;
        const reorder = Number(inv.reorderLevel) || 10;
        const isLow = qty <= reorder;
        unifiedItems.push({
          id: inv._id.toString(),
          module: 'Inventory',
          title: inv.name || 'Material Item',
          category: inv.category || 'Raw Materials',
          reference: inv.sku || `SKU-${inv._id.toString().slice(-4).toUpperCase()}`,
          amount: qty * (Number(inv.unitPrice) || 1),
          status: inv.status || (isLow ? 'Low Stock' : 'Adequate'),
          date: inv.lastRestocked || inv.updatedAt || inv.createdAt || new Date()
        });
      });
    }

    if (status && status !== 'all') {
      const targetStatus = status.toLowerCase();
      unifiedItems = unifiedItems.filter(item => {
        const itemStatus = (item.status || '').toLowerCase();
        if (targetStatus === 'low stock') return itemStatus.includes('low');
        if (targetStatus === 'active') return itemStatus === 'active' || itemStatus === 'in-progress' || itemStatus === 'ongoing';
        if (targetStatus === 'approved') return itemStatus === 'approved' || itemStatus === 'completed';
        if (targetStatus === 'pending') return itemStatus.includes('pending') || itemStatus.includes('submitted');
        return itemStatus.includes(targetStatus);
      });
    }

    if (startDate) {
      const start = new Date(startDate).getTime();
      unifiedItems = unifiedItems.filter(item => new Date(item.date).getTime() >= start);
    }
    if (endDate) {
      const end = new Date(endDate).getTime() + (24 * 60 * 60 * 1000 - 1);
      unifiedItems = unifiedItems.filter(item => new Date(item.date).getTime() <= end);
    }

    if (search && search.trim()) {
      const s = search.toLowerCase().trim();
      unifiedItems = unifiedItems.filter(item =>
        item.title.toLowerCase().includes(s) ||
        item.category.toLowerCase().includes(s) ||
        item.reference.toLowerCase().includes(s) ||
        item.status.toLowerCase().includes(s) ||
        item.module.toLowerCase().includes(s)
      );
    }

    unifiedItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    res.status(200).json({
      success: true,
      count: unifiedItems.length,
      data: unifiedItems
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const fs = require('fs');
const angularDistPath = path.join(__dirname, '../frontend/dist/buildtrack-frontend');

if (fs.existsSync(angularDistPath)) {
  app.use(express.static(angularDistPath));
}

app.get('*', (req, res) => {
  const distIndexPath = path.join(angularDistPath, 'index.html');
  if (fs.existsSync(distIndexPath)) {
    res.sendFile(distIndexPath);
  } else {
    res.sendFile(path.join(__dirname, '../index.html'));
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: err.message
  });
});

const PORT = process.env.PORT || 5000;
let server;
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(PORT, () => {
    console.log(`BuildTrack Backend running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  if (server) server.close(() => process.exit(1));
});

module.exports = { app, server };


