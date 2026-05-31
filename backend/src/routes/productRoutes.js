const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticateUser, requireAdmin } = require('../middleware/auth');

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);

// Admin only routes
router.post('/', authenticateUser, requireAdmin, productController.createProduct);

module.exports = router;
