// server/models/destination.js

//const mongoose = require('mongoose');

import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  category: String,
  subcategory: String,
  image: String,
});

const Destination = mongoose.model('Destination', destinationSchema);
export default Destination;


//module.exports = mongoose.model('Destination', destinationSchema);
