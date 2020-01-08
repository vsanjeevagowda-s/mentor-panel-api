
const mongoose = require('mongoose');

const { Schema } = mongoose;

const mentorSchema = new Schema({
  full_name: { type: String },
  email: { type: String },
  mobile: { type: String },
  about: { type: String },
  updated_at: { type: Date, default: Date.now },
  created_date: { type: Date, default: Date.now },
});

mentorSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Mentor', mentorSchema);