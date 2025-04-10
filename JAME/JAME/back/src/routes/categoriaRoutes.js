const express = require('express');
const router = express.Router();

// Importa el controlador
const categoriasController = require('../controllers/categoriaControllers');

// Rutas CRUD
router.get('/', categoriaControllers.listarCategorias);                 
router.post('/', categoriaControllers.agregarCategoria);                
router.put('/:id', categoriaControllers.actualizarCategoria);          
router.delete('/:id', categoriaControllers.eliminarCategoria);         

// (Opcionales) rutas adicionales:
router.get('/:id', categoriasController.obtenerCategoriaPorId);         
module.exports = router;
