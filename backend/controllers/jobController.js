const db = require('../db/db');

exports.getJobs = async (req, res) => {
  try {
    const jobs = await db('jobs').select('*');
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getJob = async (req, res) => {
  try {
    const job = await db('jobs').where({ id: req.params.id }).first();
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createJob = async (req, res) => {
  try {
    const [job] = await db('jobs').insert(req.body).returning('*');
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const [job] = await db('jobs').where({ id: req.params.id }).update(req.body).returning('*');
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await db('jobs').where({ id: req.params.id }).del();
    res.json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
