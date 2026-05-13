const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', jobController.getJobs);
router.get('/:id', jobController.getJob);

router.post('/', authMiddleware, adminMiddleware, jobController.createJob);
router.put('/:id', authMiddleware, adminMiddleware, jobController.updateJob);
router.delete('/:id', authMiddleware, adminMiddleware, jobController.deleteJob);

module.exports = router;
