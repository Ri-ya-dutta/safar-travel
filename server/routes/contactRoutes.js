import express from "express";
import { verifyAdmin } from "../middleware/verifyToken.js";
import {
  getAllContacts,
  createContact,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

// public
router.post('/', createContact);

// admin 
router.get('/', verifyAdmin, getAllContacts);
router.delete('/:id', verifyAdmin, deleteContact);

export default router;






