import express from 'express';
import Booking from '../models/booking.js';
import { verifyAdmin } from '../middleware/verifyToken.js';

const router = express.Router();

// GET /api/bookings (admin only)
router.get('/', verifyAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/bookings (public)
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
