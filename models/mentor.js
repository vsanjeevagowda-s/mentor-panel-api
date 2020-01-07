 
const mongoose = require('mongoose');

const { Schema } = mongoose;

const mentorSchema = new Schema({
 name: { type: String },
  updated_at: { type: Date, default: Date.now },
  created_date: { type: Date, default: Date.now },
});

mentorSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Mentor', mentorSchema);