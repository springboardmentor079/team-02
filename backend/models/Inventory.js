const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add material name'],
    trim: true,
    unique: true
  },
  category: {
    type: String,
    enum: ['Cement', 'Steel', 'Bricks', 'Sand', 'Concrete', 'Electrical Materials', 'Plumbing Materials'],
    required: true
  },
  quantity: {
    type: Number,
    required: [true, 'Please specify quantity'],
    min: 0
  },
  unit: {
    type: String,
    required: [true, 'Please specify unit, e.g. Bags, Tons, Units, Coils, Cu.m']
  },
  threshold: {
    type: Number,
    required: [true, 'Please specify safety threshold limit'],
    min: 0
  },
  costPerUnit: {
    type: Number,
    required: [true, 'Please specify unit price']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inventory', InventorySchema);
