const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add equipment name'],
    trim: true
  },
  category: {
    type: String,
    enum: ['Excavators', 'Concrete Mixers', 'Cranes', 'Dump Trucks', 'Generators', 'Safety Equipment'],
    required: true
  },
  status: {
    type: String,
    enum: ['Available', 'Allocated', 'Maintenance'],
    default: 'Available'
  },
  currentProjectId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project',
    default: null
  },
  lastServiceDate: {
    type: Date,
    default: Date.now
  },
  nextServiceDate: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resource', ResourceSchema);
