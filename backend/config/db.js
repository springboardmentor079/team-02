const mongoose = require('mongoose');
const dns = require('dns');

const seedUsers = async () => {
  try {
    const User = require('../models/User');
    
    // Auto-migration: Clear users collection if any existing user lacks a mobile number or has legacy formatting
    const usersWithoutMobile = await User.find({ 
      $or: [
        { mobile: { $exists: false } },
        { mobile: { $regex: /^\+1/ } }
      ]
    });
    if (usersWithoutMobile.length > 0) {
      console.log('Found users without mobile or with legacy formatting. Clearing users collection for clean migration...');
      await User.deleteMany({});
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
    const nikhilUser = await User.findOne({ email: 'nikhilsah8534@gmail.com' });
    if (!nikhilUser) {
      console.log('Nikhil Sah not found in database. Creating 6th user...');
      await User.create({
        name: 'Nikhil Sah',
        email: 'nikhilsah8534@gmail.com',
        password: 'password123',
        role: 'Administrator',
        department: 'Operations',
        status: 'Active',
        mobile: '+918534979715'
      });
      console.log('Nikhil Sah user created successfully.');
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

    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/buildtrack');
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