const db = require('../db/db');

exports.getInternships = async (req, res) => {
  try {
    const internships = await db('internships').select('*');
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createInternship = async (req, res) => {
  try {
    const [internship] = await db('internships').insert(req.body).returning('*');
    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateInternship = async (req, res) => {
  try {
    const [internship] = await db('internships').where({ id: req.params.id }).update(req.body).returning('*');
    res.json(internship);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteInternship = async (req, res) => {
  try {
    await db('internships').where({ id: req.params.id }).del();
    res.json({ message: 'Internship deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
