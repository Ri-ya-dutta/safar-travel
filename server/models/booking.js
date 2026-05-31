import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name:         { type: String, required: true },
  email:        { type: String, required: true },
  destination:  { type: String, required: true },
  date:         { type: String, required: true },
  travellers:   { type: Number, required: true },
  phone:        { type: String },
  message:      { type: String },

}, { timestamps: true });
const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;