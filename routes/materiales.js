// routes/services.js
const express = require('express');
const router = express.Router();
const materialesController = require('../controllers/materialController');

router.get('/', materialesController.getMaterialPage);

module.exports = router;
