// import express from 'express';
// import {
//   createDestination,
//   getAllDestinations,
//   getDestinationById
// } from '../controllers/destinationController.js';

// const router = express.Router();

// // POST - Add a new destination
// router.post('/', createDestination);

// // GET - All destinations
// router.get('/', getAllDestinations);

// // GET - Single destination by ID
// router.get('/:id', getDestinationById);

// export default router;
// server/routes/destinationRoutes.js

// import express from 'express';
// import Destination from '../models/destination.js';

// const router = express.Router();

// // @desc    Get all destinations or filter
// // @route   GET /api/destinations
// router.get('/', async (req, res) => {
//   try {
//     const { category, subcategory } = req.query;
//     const query = {};

//     if (category) query.category = category;
//     if (subcategory) query.subcategory = subcategory;

//     const destinations = await Destination.find(query);
//     res.json(destinations);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // @desc    Get single destination by ID
// // @route   GET /api/destinations/:id
// router.get('/:id', async (req, res) => {
//   try {
//     const destination = await Destination.findById(req.params.id);
//     if (!destination) {
//       return res.status(404).json({ message: 'Destination not found' });
//     }
//     res.json(destination);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// export default router;
// server/routes/destinationRoutes.js
import express from 'express';
import {
  getAllDestinations,
  // other controllers
} from '../controllers/destinationController.js';

const router = express.Router();

router.get('/', getAllDestinations);

export default router;
