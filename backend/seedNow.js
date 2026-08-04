require('dotenv').config();
const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);


const Project    = require('./models/Project');
const User       = require('./models/User');
const Milestone  = require('./models/Milestone');
const Resource   = require('./models/Resource');
const Inventory  = require('./models/Inventory');
const Worker     = require('./models/Worker');
const Attendance = require('./models/Attendance');
const Procurement = require('./models/Procurement');
const Budget     = require('./models/Budget');
const DailyLog   = require('./models/DailyLog');

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 4000 });
  } catch (err) {
    console.warn(`Primary connection failed (${err.message}). Connecting to local MongoDB...`);
    await mongoose.connect('mongodb://127.0.0.1:27017/buildtrack');
  }
  console.log('✅ Connected to DB:', mongoose.connection.host);

  // ── 1. Get project IDs from Atlas ─────────────────────────────────────
  const projects = await Project.find({});
  if (projects.length === 0) {
    console.error('❌ No projects found! Please run basic seed first.');
    process.exit(1);
  }
  const p = {}; // name → _id map
  projects.forEach(proj => { p[proj.name] = proj._id; });

  const p1 = p['Horizon Commercial Complex'];
  const p2 = p['Sunset Ridge Residential Towers'];
  const p3 = p['Metro Parkway Expansion'];

  // ── 2. Get user IDs from Atlas ─────────────────────────────────────────
  const users = await User.find({});
  const u = {}; // email → _id map
  users.forEach(user => { u[user.email] = user._id; });
  const engineerId = u['engineer@buildtrack.io'];

  // ── 3. MILESTONES ──────────────────────────────────────────────────────
  const milestoneCount = await Milestone.countDocuments();
  if (milestoneCount === 0) {
    await Milestone.insertMany([
      { projectId: p1, title: 'Excavation & Foundation Work',      phase: 'Foundation',       status: 'Completed',  dueDate: new Date('2026-03-15'), actualCompletionDate: new Date('2026-03-10') },
      { projectId: p1, title: 'Superstructure Framing',            phase: 'Structural Work',  status: 'In Progress', dueDate: new Date('2026-07-20'), actualCompletionDate: null },
      { projectId: p1, title: 'HVAC & Plumbing Fitting',           phase: 'Plumbing Work',    status: 'Pending',    dueDate: new Date('2026-09-10'), actualCompletionDate: null },
      { projectId: p1, title: 'Electrical Cabling & Fitouts',      phase: 'Electrical Work',  status: 'Pending',    dueDate: new Date('2026-10-05'), actualCompletionDate: null },
      { projectId: p2, title: 'Foundation Concreting',             phase: 'Foundation',       status: 'Completed',  dueDate: new Date('2025-07-30'), actualCompletionDate: new Date('2025-08-12') },
      { projectId: p2, title: 'Concrete Core Structure',           phase: 'Structural Work',  status: 'Completed',  dueDate: new Date('2025-12-15'), actualCompletionDate: new Date('2025-12-28') },
      { projectId: p2, title: 'Plumbing & Electrical Riser Pipes', phase: 'Plumbing Work',    status: 'In Progress', dueDate: new Date('2026-04-30'), actualCompletionDate: null },
      { projectId: p2, title: 'Exterior Cladding & Drywall',       phase: 'Finishing Work',   status: 'Pending',    dueDate: new Date('2026-07-15'), actualCompletionDate: null },
    ]);
    console.log('✅ Milestones seeded (8 docs)');
  } else {
    console.log(`ℹ️  Milestones already has ${milestoneCount} docs, skipping.`);
  }

  // ── 4. RESOURCES ───────────────────────────────────────────────────────
  const resourceCount = await Resource.countDocuments();
  if (resourceCount === 0) {
    await Resource.insertMany([
      { name: 'Caterpillar 320 Excavator',          category: 'Excavators',        status: 'Allocated',   currentProjectId: p1, lastServiceDate: new Date('2026-04-10'), nextServiceDate: new Date('2026-10-10') },
      { name: 'Liebherr LTM 1050 Crane',            category: 'Cranes',            status: 'Allocated',   currentProjectId: p2, lastServiceDate: new Date('2026-05-18'), nextServiceDate: new Date('2026-11-18') },
      { name: 'Schwing Stetter Concrete Mixer',     category: 'Concrete Mixers',   status: 'Available',   currentProjectId: null, lastServiceDate: new Date('2026-06-01'), nextServiceDate: new Date('2026-12-01') },
      { name: 'Volvo FMX Dump Truck',               category: 'Dump Trucks',       status: 'Maintenance', currentProjectId: null, lastServiceDate: new Date('2026-07-01'), nextServiceDate: new Date('2026-07-10') },
      { name: 'Cummins 125kVA Generator',           category: 'Generators',        status: 'Available',   currentProjectId: null, lastServiceDate: new Date('2026-03-25'), nextServiceDate: new Date('2026-09-25') },
      { name: 'Full PPE Safety Set (100 kits)',     category: 'Safety Equipment',  status: 'Allocated',   currentProjectId: p3, lastServiceDate: new Date('2026-01-15'), nextServiceDate: new Date('2026-07-15') },
    ]);
    console.log('✅ Resources seeded (6 docs)');
  } else {
    console.log(`ℹ️  Resources already has ${resourceCount} docs, skipping.`);
  }

  // ── 5. INVENTORY ───────────────────────────────────────────────────────
  const inventoryCount = await Inventory.countDocuments();
  if (inventoryCount === 0) {
    await Inventory.insertMany([
      { name: 'Portland Cement (Grade 53)',              category: 'Cement',                quantity: 2400, unit: 'Bags',   threshold: 500,   costPerUnit: 8 },
      { name: 'Reinforcement Steel Bars TMT',            category: 'Steel',                 quantity: 15,   unit: 'Tons',   threshold: 5,     costPerUnit: 750 },
      { name: 'Fly Ash Red Bricks',                      category: 'Bricks',                quantity: 45000,unit: 'Units',  threshold: 10000, costPerUnit: 0.15 },
      { name: 'River Building Sand',                     category: 'Sand',                  quantity: 180,  unit: 'Tons',   threshold: 50,    costPerUnit: 40 },
      { name: 'Standard Grade Concrete aggregate',       category: 'Concrete',              quantity: 450,  unit: 'Cu.m',   threshold: 100,   costPerUnit: 85 },
      { name: 'Copper Wires & Conduits (Electrical)',    category: 'Electrical Materials',  quantity: 120,  unit: 'Coils',  threshold: 30,    costPerUnit: 60 },
      { name: 'PVC Drainage Pipes 4-inch',               category: 'Plumbing Materials',    quantity: 8,    unit: 'Units',  threshold: 25,    costPerUnit: 18 },
    ]);
    console.log('✅ Inventory seeded (7 docs)');
  } else {
    console.log(`ℹ️  Inventory already has ${inventoryCount} docs, skipping.`);
  }

  // ── 6. WORKERS ─────────────────────────────────────────────────────────
  const workerCount = await Worker.countDocuments();
  if (workerCount === 0) {
    await Worker.insertMany([
      { name: 'Robert Vance',    category: 'Contractors',     phone: '+91-9000100101', dailyWage: 350, status: 'Active' },
      { name: 'Karan Malhotra',  category: 'Engineers',       phone: '+91-9000100102', dailyWage: 280, status: 'Active' },
      { name: 'Arthur Pendelton',category: 'Supervisors',     phone: '+91-9000100103', dailyWage: 200, status: 'Active' },
      { name: 'Miguel Alvarez',  category: 'Skilled Workers', phone: '+91-9000100104', dailyWage: 150, status: 'Active' },
      { name: 'Jared Leto',      category: 'Unskilled Workers',phone: '+91-9000100105',dailyWage: 95,  status: 'Active' },
      { name: 'Sarah Connor',    category: 'Consultants',     phone: '+91-9000100106', dailyWage: 400, status: 'Active' },
    ]);
    console.log('✅ Workers seeded (6 docs)');
  } else {
    console.log(`ℹ️  Workers already has ${workerCount} docs, skipping.`);
  }

  // ── 7. ATTENDANCE ──────────────────────────────────────────────────────
  const workers = await Worker.find({});
  const attendanceCount = await Attendance.countDocuments();
  if (attendanceCount === 0 && workers.length > 0) {
    const wIds = workers.map(w => w._id);
    await Attendance.insertMany([
      { date: new Date('2026-07-07'), presentWorkers: wIds.slice(0, 5) },
      { date: new Date('2026-07-08'), presentWorkers: wIds.slice(0, 4) },
      { date: new Date('2026-07-09'), presentWorkers: wIds.slice(0, 6) },
    ]);
    console.log('✅ Attendance seeded (3 docs)');
  } else {
    console.log(`ℹ️  Attendance already has ${attendanceCount} docs, skipping.`);
  }

  // ── 8. PROCUREMENTS ────────────────────────────────────────────────────
  const procurementCount = await Procurement.countDocuments();
  if (procurementCount === 0) {
    await Procurement.insertMany([
      { vendorName: 'Apex Steel Distributors',  category: 'Raw Materials',    items: 'Reinforcement TMT bars (10 Tons)',               totalAmount: 7500,  status: 'Paid',     invoiceNo: 'INV-2026-8801', date: new Date('2026-06-15') },
      { vendorName: 'Titan Machinery Leasing',  category: 'Machinery',        items: 'Liebherr Tower Crane rental - 1 month',          totalAmount: 12000, status: 'Approved', invoiceNo: 'INV-2026-9042', date: new Date('2026-07-02') },
      { vendorName: 'BuildSafe Solutions',      category: 'Safety Equipment', items: 'Reflective jackets, safety harnesses, boots',    totalAmount: 3200,  status: 'Pending',  invoiceNo: 'INV-2026-9111', date: new Date('2026-07-06') },
      { vendorName: 'RK Cement Suppliers',      category: 'Raw Materials',    items: 'Portland Cement Grade 53 - 1000 Bags',           totalAmount: 8000,  status: 'Received', invoiceNo: 'INV-2026-9220', date: new Date('2026-07-10') },
      { vendorName: 'National Electric Corp',   category: 'Equipment',        items: 'Copper wires & conduit pipes bulk order',        totalAmount: 4500,  status: 'Pending',  invoiceNo: 'INV-2026-9350', date: new Date('2026-07-12') },
    ]);
    console.log('✅ Procurements seeded (5 docs)');
  } else {
    console.log(`ℹ️  Procurements already has ${procurementCount} docs, skipping.`);
  }

  // ── 9. BUDGETS ─────────────────────────────────────────────────────────
  const budgetCount = await Budget.countDocuments();
  if (budgetCount === 0) {
    await Budget.insertMany([
      // Horizon Commercial Complex
      { projectId: p1, category: 'Labor Cost',          allocated: 1200000, actual: 520000 },
      { projectId: p1, category: 'Material Cost',        allocated: 1800000, actual: 780000 },
      { projectId: p1, category: 'Equipment Cost',       allocated: 800000,  actual: 340000 },
      { projectId: p1, category: 'Transportation Cost',  allocated: 300000,  actual: 110000 },
      { projectId: p1, category: 'Maintenance Cost',     allocated: 200000,  actual: 60000  },
      { projectId: p1, category: 'Administrative Cost',  allocated: 200000,  actual: 40000  },
      // Sunset Ridge Residential Towers
      { projectId: p2, category: 'Labor Cost',           allocated: 2500000, actual: 2300000 },
      { projectId: p2, category: 'Material Cost',        allocated: 3500000, actual: 3100000 },
      { projectId: p2, category: 'Equipment Cost',       allocated: 1200000, actual: 950000  },
      { projectId: p2, category: 'Transportation Cost',  allocated: 400000,  actual: 250000  },
      // Metro Parkway Expansion
      { projectId: p3, category: 'Labor Cost',           allocated: 4000000, actual: 800000  },
      { projectId: p3, category: 'Material Cost',        allocated: 6000000, actual: 1200000 },
      { projectId: p3, category: 'Equipment Cost',       allocated: 3000000, actual: 900000  },
      { projectId: p3, category: 'Transportation Cost',  allocated: 1500000, actual: 200000  },
    ]);
    console.log('✅ Budgets seeded (14 docs)');
  } else {
    console.log(`ℹ️  Budgets already has ${budgetCount} docs, skipping.`);
  }

  // ── 10. DAILY LOGS ─────────────────────────────────────────────────────
  const dailyLogCount = await DailyLog.countDocuments();
  if (dailyLogCount === 0 && engineerId) {
    await DailyLog.insertMany([
      { projectId: p1, date: new Date('2026-07-07'), workCompleted: 'Poured foundation walls for Block B. Steel columns aligned.',          delayTime: 0, delayReason: 'None',                          supervisorId: engineerId },
      { projectId: p2, date: new Date('2026-07-07'), workCompleted: 'Plumbing risers installation stalled on floor 8.',                      delayTime: 4, delayReason: 'Material Shortage (PVC Pipes)', supervisorId: engineerId },
      { projectId: p1, date: new Date('2026-07-08'), workCompleted: 'Completed Block B steel frame. Started concrete pour on Level 2.',      delayTime: 0, delayReason: 'None',                          supervisorId: engineerId },
      { projectId: p3, date: new Date('2026-07-08'), workCompleted: 'Road survey completed for Zone 3. Equipment mobilization in progress.', delayTime: 2, delayReason: 'Traffic Diversion Delay',        supervisorId: engineerId },
    ]);
    console.log('✅ Daily Logs seeded (4 docs)');
  } else {
    console.log(`ℹ️  Daily Logs already has ${dailyLogCount} docs, skipping.`);
  }

  // ── SUMMARY ────────────────────────────────────────────────────────────
  console.log('\n📊 Final Atlas Collection Counts:');
  console.log('  Projects    :', await Project.countDocuments());
  console.log('  Users       :', await User.countDocuments());
  console.log('  Milestones  :', await Milestone.countDocuments());
  console.log('  Resources   :', await Resource.countDocuments());
  console.log('  Inventory   :', await Inventory.countDocuments());
  console.log('  Workers     :', await Worker.countDocuments());
  console.log('  Attendance  :', await Attendance.countDocuments());
  console.log('  Procurements:', await Procurement.countDocuments());
  console.log('  Budgets     :', await Budget.countDocuments());
  console.log('  Daily Logs  :', await DailyLog.countDocuments());

  await mongoose.disconnect();
  console.log('\n✅ Done. All collections seeded in MongoDB Atlas!');
};

run().catch(err => { console.error('❌ Error:', err.message); process.exit(1); });
