import express from 'express';
import {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
} from '../controllers/destinationController.js';
import { verifyAdmin } from '../middleware/verifyToken.js';

const router = express.Router();

// Public routes
router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);

// Admin only routes
router.post('/', verifyAdmin, createDestination);
router.put('/:id', verifyAdmin, updateDestination);
router.delete('/:id', verifyAdmin, deleteDestination);

export default router;