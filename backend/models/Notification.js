const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a notification title'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Please add notification message text'],
    trim: true
  },
  type: {
    type: String,
    enum: ['info', 'warning', 'danger', 'success'],
    default: 'info'
  },
  category: {
    type: String,
    enum: ['inventory', 'procurement', 'milestone', 'system', 'general'],
    default: 'general'
  },
  read: {
    type: Boolean,
    default: false
  },
  link: {
    type: String,
    default: ''
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  recipientRole: {
    type: String,
    enum: ['all', 'administrator', 'project manager', 'site engineer', 'contractor', 'client'],
    default: 'all'
  },
  channel: {
    type: String,
    enum: ['in_app', 'email', 'sms', 'all'],
    default: 'in_app'
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notification', NotificationSchema);
