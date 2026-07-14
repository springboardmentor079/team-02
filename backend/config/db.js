const mongoose = require('mongoose');
const dns = require('dns');

const seedUsers = async () => {
  try {
    const User = require('../models/User');
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      console.log('No users found in database. Seeding initial demo users...');
      const initialUsers = [
        { name: 'James Carter', email: 'admin@buildtrack.io', password: 'password123', role: 'Administrator', department: 'Operations', status: 'Active' },
        { name: 'Laura Miller', email: 'pm@buildtrack.io', password: 'password123', role: 'Project Manager', department: 'Project Mgmt Office', status: 'Active' },
        { name: 'Sanjay Sharma', email: 'engineer@buildtrack.io', password: 'password123', role: 'Site Engineer', department: 'Construction Eng', status: 'Active' },
        { name: 'Derek Vance', email: 'contractor@buildtrack.io', password: 'password123', role: 'Contractor', department: 'Subcontracting', status: 'Active' },
        { name: 'John Doe', email: 'client@horizon.com', password: 'password123', role: 'Client', department: 'Horizon Group', status: 'Active' }
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
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;