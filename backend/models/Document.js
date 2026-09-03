const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a document title'],
    trim: true
  },
  category: {
    type: String,
    enum: [
      'Blueprints & Drawings',
      'Contracts & Legal',
      'Permits & Approvals',
      'Safety Compliance',
      'Invoices & Receipts',
      'Site Photos',
      'Specifications'
    ],
    default: 'Blueprints & Drawings'
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  fileUrl: {
    type: String,
    required: [true, 'Please provide file URL or base64 reference']
  },
  fileType: {
    type: String,
    enum: ['PDF', 'DWG', 'PNG', 'JPG', 'DOCX', 'XLSX'],
    default: 'PDF'
  },
  fileSize: {
    type: String,
    default: '2.4 MB'
  },
  uploadedBy: {
    type: String,
    default: 'Site Engineer'
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    default: null
  },
  procurementId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Procurement',
    default: null
  },
  version: {
    type: String,
    default: 'v1.0'
  },
  status: {
    type: String,
    enum: ['Active', 'Under Review', 'Archived'],
    default: 'Active'
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', DocumentSchema);
