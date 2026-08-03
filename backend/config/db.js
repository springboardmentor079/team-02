const mongoose = require('mongoose');
const dns = require('dns');

const seedUsers = async () => {
  try {
    const User = require('../models/User');
    
    // Soft migration: Assign default mobile number to legacy users if mobile is missing
    const usersWithoutMobile = await User.find({ mobile: { $exists: false } });
    if (usersWithoutMobile.length > 0) {
      console.log(`Found ${usersWithoutMobile.length} legacy users without mobile number. Migrating default mobile numbers...`);
      for (const u of usersWithoutMobile) {
        u.mobile = `+9199${Math.floor(10000000 + Math.random() * 90000000)}`;
        await u.save();
      }
    }

    const userCount = await User.countDocuments();
    if (userCount === 0) {
      console.log('No users found in database. Seeding initial demo users...');
      const initialUsers = [
        { name: 'James Carter', email: 'admin@buildtrack.io', password: 'password123', role: 'Administrator', department: 'Operations', status: 'Active', mobile: '+919876543210' },
        { name: 'Laura Miller', email: 'pm@buildtrack.io', password: 'password123', role: 'Project Manager', department: 'Project Mgmt Office', status: 'Active', mobile: '+919876543211' },
        { name: 'Sanjay Sharma', email: 'engineer@buildtrack.io', password: 'password123', role: 'Site Engineer', department: 'Construction Eng', status: 'Active', mobile: '+919876543212' },
        { name: 'Derek Vance', email: 'contractor@buildtrack.io', password: 'password123', role: 'Contractor', department: 'Subcontracting', status: 'Active', mobile: '+919876543213' },
        { name: 'John Doe', email: 'client@horizon.com', password: 'password123', role: 'Client', department: 'Horizon Group', status: 'Active', mobile: '+919876543214' },
        { name: 'Nikhil Sah', email: 'nikhilsah8534@gmail.com', password: 'password123', role: 'Administrator', department: 'Operations', status: 'Active', mobile: '+918534979715' }
      ];
      for (const u of initialUsers) {
        await User.create(u);
      }
      console.log('Seeding initial demo users completed successfully.');
    }
  } catch (err) {
    console.error(`Error seeding users: ${err.message}`);
  }
};

const seedProjects = async () => {
  try {
    const Project = require('../models/Project');
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log('No projects found in database. Seeding initial demo projects...');
      const initialProjects = [
        { name: 'Horizon Commercial Complex', category: 'Commercial', client: 'Horizon Group Inc.', budget: 4500000, actualExpense: 1850000, status: 'Ongoing', progress: 42, location: 'Austin, TX', startDate: new Date('2026-01-10'), endDate: new Date('2026-11-20') },
        { name: 'Sunset Ridge Residential Towers', category: 'Residential', client: 'Lumina Developments', budget: 8200000, actualExpense: 6800000, status: 'Delayed', progress: 75, location: 'Denver, CO', startDate: new Date('2025-05-15'), endDate: new Date('2026-08-30') },
        { name: 'Metro Parkway Expansion', category: 'Infrastructure', client: 'State Dept of Transport', budget: 15000000, actualExpense: 3200000, status: 'Ongoing', progress: 20, location: 'Phoenix, AZ', startDate: new Date('2026-03-01'), endDate: new Date('2027-06-15') },
        { name: 'Greenfields Water Treatment Plant', category: 'Industrial', client: 'Municipal Water Board', budget: 3100000, actualExpense: 3100000, status: 'Completed', progress: 100, location: 'Grand Rapids, MI', startDate: new Date('2025-02-10'), endDate: new Date('2026-06-01') }
      ];
      for (const p of initialProjects) {
        await Project.create(p);
      }
      console.log('Seeding initial demo projects completed successfully.');
    }
  } catch (err) {
    console.error(`Error seeding projects: ${err.message}`);
  }
};

const connectDB = async () => {
  try {
    // Configure public DNS servers fallback for Node to resolve MongoDB Atlas SRV records correctly
    try {
      dns.setServers(['8.8.8.8', '1.1.1.1']);
    } catch (dnsErr) {
      console.warn(`Warning: Could not set custom DNS servers: ${dnsErr.message}`);
    }

    let conn;
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/buildtrack';
    try {
      conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 4000 });
    } catch (primaryErr) {
      console.warn(`Primary MongoDB Connection failed (${primaryErr.message}). Falling back to local MongoDB...`);
      conn = await mongoose.connect('mongodb://127.0.0.1:27017/buildtrack', { serverSelectionTimeoutMS: 5000 });
    }

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Seed users if empty
    await seedUsers();
    // Seed projects if empty
    await seedProjects();
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;