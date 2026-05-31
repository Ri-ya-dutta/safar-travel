// import mongoose from 'mongoose';

// const bookingSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   destination: { type: String, required: true },
//   date: { type: String, required: true },
//   phone: { type: String },
//   message: { type: String }
// }, { timestamps: true });

// export default mongoose.model('Booking', bookingSchema);
// models/Booking.js
// models/booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  travellers: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
