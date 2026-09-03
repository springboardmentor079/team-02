const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add material name'],
    trim: true
  },
  category: {
    type: String,
    required: true,
    default: 'Cement'
  },
  quantity: {
    type: Number,
    required: [true, 'Please specify quantity'],
    min: 0,
    default: 0
  },
  unit: {
    type: String,
    default: 'Units'
  },
  threshold: {
    type: Number,
    default: 10,
    min: 0
  },
  costPerUnit: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inventory', InventorySchema);
