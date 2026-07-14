const mongoose = require('mongoose');

const DailyLogSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  workCompleted: {
    type: String,
    required: [true, 'Please log tasks completed']
  },
  delayTime: {
    type: Number,
    default: 0
  },
  delayReason: {
    type: String,
    default: 'None'
  },
  supervisorId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DailyLog', DailyLogSchema);
