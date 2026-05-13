const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.use(authMiddleware, adminMiddleware);

router.get('/', userController.getUsers);
router.put('/:id/role', userController.updateRole);
router.delete('/:id', userController.deleteUser);

module.exports = router;
