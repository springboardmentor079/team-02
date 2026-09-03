const mongoose = require('mongoose');

const InventoryDeliverySchema = new mongoose.Schema({
  dispatchNo: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  materialName: {
    type: String,
    required: [true, 'Please add material name'],
    trim: true
  },
  category: {
    type: String,
    required: true,
    default: 'Cement'
  },
  contractorName: {
    type: String,
    required: [true, 'Please add contractor/supplier name'],
    trim: true
  },
  contractorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  projectName: {
    type: String,
    default: 'Metro Station Extension Project'
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
  dispatchedQuantity: {
    type: Number,
    required: [true, 'Please specify dispatched quantity'],
    min: 1
  },
  unit: {
    type: String,
    required: true,
    default: 'Units'
  },
  dispatchDate: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    default: ''
  },
  costPerUnit: {
    type: Number,
    default: 0
  },
  threshold: {
    type: Number,
    default: 10
  },

  // Site Engineer Verification fields
  status: {
    type: String,
    enum: ['Pending Verification', 'Verified', 'Discrepancy Reported', 'Rejected'],
    default: 'Pending Verification'
  },
  receivedQuantity: {
    type: Number,
    default: 0
  },
  okQuantity: {
    type: Number,
    default: 0
  },
  defectiveQuantity: {
    type: Number,
    default: 0
  },
  missingQuantity: {
    type: Number,
    default: 0
  },
  verificationNotes: {
    type: String,
    default: ''
  },
  verifiedByName: {
    type: String,
    default: ''
  },
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  verifiedAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('InventoryDelivery', InventoryDeliverySchema);
