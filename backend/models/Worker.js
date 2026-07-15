const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add worker name'],
    trim: true
  },
  category: {
    type: String,
    enum: ['Engineers', 'Supervisors', 'Contractors', 'Skilled Workers', 'Unskilled Workers', 'Consultants'],
    required: true
  },
  phone: {
    type: String,
    required: [true, 'Please add contact number']
  },
  dailyWage: {
    type: Number,
    required: [true, 'Please add daily wage']
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Worker', WorkerSchema);
