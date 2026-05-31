import Destination from '../models/destination.js';

export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find(); // <-- This line may be failing
    console.log("Fetched destinations:", destinations);
    res.json(destinations);
  } catch (err) {
    console.error("Error fetching destinations from MongoDB:", err); // 👈 Print exact error
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
};
