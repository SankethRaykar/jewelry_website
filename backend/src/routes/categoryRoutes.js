const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { authenticateUser, requireAdmin } = require('../middleware/auth');

router.get('/', categoryController.getCategories);
router.post('/', authenticateUser, requireAdmin, categoryController.createCategory);

module.exports = router;
