const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', courseController.getCourses);

router.post('/', authMiddleware, adminMiddleware, courseController.createCourse);
router.put('/:id', authMiddleware, adminMiddleware, courseController.updateCourse);
router.delete('/:id', authMiddleware, adminMiddleware, courseController.deleteCourse);

module.exports = router;
