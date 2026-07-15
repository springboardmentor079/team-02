const mongoose = require('mongoose');

const MilestoneSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please add a milestone title'],
    trim: true
  },
  phase: {
    type: String,
    enum: ['Foundation', 'Structural Work', 'Electrical Work', 'Plumbing Work', 'Finishing Work', 'Inspection Work'],
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },
  dueDate: {
    type: Date,
    required: [true, 'Please select target completion date']
  },
  actualCompletionDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Milestone', MilestoneSchema);
