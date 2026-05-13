const db = require('../db/db');

exports.createApplication = async (req, res) => {
  try {
    const [app] = await db('applications').insert({
      user_id: req.user.id,
      job_id: req.body.job_id,
      resume_link: req.body.resume_link
    }).returning('*');
    res.status(201).json(app);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const apps = await db('applications')
      .join('users', 'applications.user_id', 'users.id')
      .join('jobs', 'applications.job_id', 'jobs.id')
      .select('applications.*', 'users.name as user_name', 'users.email', 'jobs.title as job_title');
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const { status } = req.body;
    const [app] = await db('applications').where({ id: req.params.id }).update({ status }).returning('*');
    res.json(app);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
