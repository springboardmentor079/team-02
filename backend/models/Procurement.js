const mongoose = require('mongoose');

const ProcurementSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: [true, 'Please add a supplier vendor name']
  },
  category: {
    type: String,
    enum: ['Raw Materials', 'Equipment', 'Machinery', 'Safety Equipment', 'Office Supplies'],
    required: true
  },
  items: {
    type: String,
    required: [true, 'Please add PO items list description']
  },
  totalAmount: {
    type: Number,
    required: [true, 'Please add invoice total']
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Shipped', 'Received', 'Paid'],
    default: 'Pending'
  },
  invoiceNo: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Procurement', ProcurementSchema);
