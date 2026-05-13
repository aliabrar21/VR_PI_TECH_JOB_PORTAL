const db = require('../db/db');

exports.getCourses = async (req, res) => {
  try {
    const courses = await db('courses').select('*');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const [course] = await db('courses').insert(req.body).returning('*');
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const [course] = await db('courses').where({ id: req.params.id }).update(req.body).returning('*');
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await db('courses').where({ id: req.params.id }).del();
    res.json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
