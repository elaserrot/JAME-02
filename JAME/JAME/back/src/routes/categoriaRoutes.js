const express = require('express');
const router = express.Router();
const categoriaControllers = require('../controllers/categoriaControllers');

// Rutas CRUD
router.get('listar/', categoriaControllers.listarCategorias);
router.post('agregar/', categoriaControllers.agregarCategoria);
router.put('actualizar/:id', categoriaControllers.actualizarCategoria);
router.delete('eliminar/:id', categoriaControllers.eliminarCategoria);
router.get('agregar/:id', categoriaControllers.obtenerCategoriaPorId);

module.exports = router;
