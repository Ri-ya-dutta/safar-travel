import Destination from '../models/destination.js';

export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find(); 
    res.json(destinations);
  } catch (err) {
    console.error('Destination error:', err); // ← add this temporarily
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
};

export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(destination);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch destination' });
  }
};

export const createDestination = async (req, res) => {
  try {
    const destination = new Destination(req.body);
    await destination.save();
    res.status(201).json(destination);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create destination' });
  }
};

export const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(destination);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update destination' });
  }
};

export const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json({ message: 'Destination deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete destination' });
  }
};