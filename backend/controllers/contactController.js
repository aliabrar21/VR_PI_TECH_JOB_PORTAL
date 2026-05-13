const db = require('../db/db');

exports.createContact = async (req, res) => {
  try {
    const [contact] = await db('contacts').insert(req.body).returning('*');
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await db('contacts').select('*').orderBy('created_at', 'desc');
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
