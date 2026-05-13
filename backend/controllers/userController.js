const db = require('../db/db');

exports.getUsers = async (req, res) => {
  try {
    const users = await db('users').select('id', 'name', 'email', 'role', 'created_at');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    await db('users').where({ id }).update({ role });
    res.json({ message: 'User role updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db('users').where({ id }).del();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
