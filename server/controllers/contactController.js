import Contact from '../models/contact.js';

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts); 
    } catch(err) {
         res.status(500).json({ message: 'Server error' });
    }
};

export const createContact = async (req, res) => {
    try {
        const { fullName, email, message } = req.body;
        const contact = new Contact({ fullName, email, message });
        await contact.save();
        res.status(201).json({ message: 'Contact saved successfully'});
    } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  
    }
};
