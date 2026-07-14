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
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, role, department, securityCode } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ success: false, msg: 'User already exists' });

    if (!securityCode || securityCode !== '002') {
      return res.status(400).json({ success: false, msg: 'Invalid or missing company verification code. Registration request cannot be sent.' });
    }

    user = await User.create({ name, email, password, role, department });
    const token = user.getSignedJwtToken();
    res.status(201).json({ success: true, token, user: { id: user._id, name, email, role } });
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
    res.status(200).json({ success: true, token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
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
