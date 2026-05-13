const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internshipController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', internshipController.getInternships);

router.post('/', authMiddleware, adminMiddleware, internshipController.createInternship);
router.put('/:id', authMiddleware, adminMiddleware, internshipController.updateInternship);
router.delete('/:id', authMiddleware, adminMiddleware, internshipController.deleteInternship);

module.exports = router;
