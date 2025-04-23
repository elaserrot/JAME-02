// routes.js
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Definir las rutas
router.get('/listar', productosController.listarProductos);
 
router.get('/listar/:id', productosController.listarProductoPorId);
 
router.post('/agregar', productosController.agregarProducto);

router.delete('/eliminar/:id', productosController.eliminarProducto);

router.put('/actualizar/:id', productosController.actualizarProducto);

module.exports = router;
