import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String },
  clothType: { type: String },
  length: { type: String },
  chest: { type: String },
  lowerChest: { type: String },
  stomach: { type: String },
  crossChest: { type: String },
  hip: { type: String },
  shoulder: { type: String },
  sleeves: { type: String },
  crossBack: { type: String },
  backLength: { type: String },
  neck: { type: String },
  waist: { type: String },
  thigh: { type: String },
  knee: { type: String },
  bottom: { type: String },
  crotchHalf: { type: String },
  crotchFull: { type: String },
  inseamLength: { type: String },
  comment: { type: String },
  message: { type: String },
}, {
  timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
