import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  location:    { type: String, required: true },
  price:       { type: Number, required: true },
  category:    { type: String, required: true },
  subcategory: { type: String },
  image:       { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

const Destination = mongoose.model('Destination', destinationSchema);
export default Destination;