import express from 'express';
import Contact from '../models/contact.js';
import { verifyAdmin } from '../middleware/verifyToken.js';

const router = express.Router();

// GET /api/contacts (admin only)
router.get('/', verifyAdmin, async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/contacts (public)
router.post('/', async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    const newContact = new Contact({ fullName, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ success: false, message: 'Something went wrong', error });
  }
});

export default router;
