const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

// Rutas CRUD
router.get('/listar/:id', carritoController.listarCarrito);
router.post('/agregar/:id', carritoController.agregarProducto);


module.exports = router;
