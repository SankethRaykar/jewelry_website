const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/uploadController');
const { authenticateUser, requireAdmin } = require('../middleware/auth');

// Setup multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

router.post('/', authenticateUser, requireAdmin, upload.single('image'), uploadController.uploadImage);

module.exports = router;
