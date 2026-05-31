import express from 'express';
import {
  getAllBookings,
  createBooking,
  deleteBooking,
} from '../controllers/bookingController.js';
import { verifyAdmin } from '../middleware/verifyToken.js';

const router = express.Router();

// Public
router.post('/', createBooking);

// Admin only
router.get('/', verifyAdmin, getAllBookings);
router.delete('/:id', verifyAdmin, deleteBooking);

export default router;