const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a project name'],
    trim: true,
    unique: true
  },
  category: {
    type: String,
    enum: ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Government Projects'],
    required: [true, 'Please select a project category']
  },
  client: {
    type: String,
    required: [true, 'Please add a client organization']
  },
  budget: {
    type: Number,
    required: [true, 'Please add a total budget']
  },
  actualExpense: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['Planning', 'Ongoing', 'Delayed', 'Completed', 'Closed'],
    default: 'Ongoing'
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  location: {
    type: String,
    required: [true, 'Please add site location']
  },
  startDate: {
    type: Date,
    required: [true, 'Please add start date']
  },
  endDate: {
    type: Date,
    required: [true, 'Please add target end date']
  },
  projectManager: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
