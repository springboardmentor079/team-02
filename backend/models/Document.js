const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a document title'],
    trim: true
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  category: {
    type: String,
    enum: ['Drawings', 'Contracts', 'Permits', 'Reports', 'Invoices', 'Safety', 'Other'],
    default: 'Other'
  },
  projectId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project',
    default: null
  },
  originalName: {
    type: String,
    required: true
  },
  storedFileName: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  version: {
    type: Number,
    default: 1
  },
  uploadedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', DocumentSchema);
