const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productos.controller');

router.post("/", productoController.create);


module.exports = router;
