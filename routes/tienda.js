// routes/services.js
const express = require('express');
const router = express.Router();
const tiendaController = require('../controllers/tiendContoller');

router.get('/', tiendaController.getTiendaPage);

module.exports = router;
