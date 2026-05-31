// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import bookingRoutes from './routes/bookingRoutes.js';
import destinationRoutes from './routes/destinationRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config(); // ✅ Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin:process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}))

app.use(express.json());

//  MongoDB Connection using .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

// Optional base route
app.get('/', (req, res) => {
  res.send('Safar backend running 🚀');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🔗 Server running on http://localhost:${PORT}`);
});
