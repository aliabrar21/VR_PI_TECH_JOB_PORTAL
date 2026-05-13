const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.use(authMiddleware);

router.post('/', applicationController.createApplication);
router.get('/', adminMiddleware, applicationController.getApplications);
router.put('/:id', adminMiddleware, applicationController.updateApplication);

module.exports = router;
