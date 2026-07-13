const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project',
    required: true
  },
  category: {
    type: String,
    enum: ['Labor Cost', 'Material Cost', 'Equipment Cost', 'Transportation Cost', 'Maintenance Cost', 'Administrative Cost'],
    required: true
  },
  allocated: {
    type: Number,
    required: [true, 'Please add allocated budget quantity']
  },
  actual: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Budget', BudgetSchema);
