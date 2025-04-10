const express = require('express');
const router = express.Router();

// Importa el controlador
const categoriasController = require('../controllers/categoriasController');

// Rutas CRUD
router.get('/', categoriasController.listarCategorias);                 
router.post('/', categoriasController.agregarCategoria);                
router.put('/:id', categoriasController.actualizarCategoria);          
router.delete('/:id', categoriasController.eliminarCategoria);         

// (Opcionales) rutas adicionales:
router.get('/:id', categoriasController.obtenerCategoriaPorId);         
module.exports = router;
