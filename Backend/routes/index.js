const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/student/get', studentController.get);
router.post('/student/create', studentController.post);

module.exports = router;