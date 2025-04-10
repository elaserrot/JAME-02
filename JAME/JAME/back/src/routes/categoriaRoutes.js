const express = require('express');
const router = express.Router();

// Importa el controlador
const categoriasController = require('../controllers/categoriasController');

// Rutas CRUD
router.get('/', categoriasController.listarCategorias);                 // Listar todas las categorías
router.post('/', categoriasController.agregarCategoria);                // Agregar una categoría
router.put('/:id', categoriasController.actualizarCategoria);           // Actualizar una categoría por ID
router.delete('/:id', categoriasController.eliminarCategoria);          // Eliminar una categoría por ID

// (Opcionales) rutas adicionales:
router.get('/:id', categoriasController.obtenerCategoriaPorId);         // Obtener una categoría por ID

module.exports = router;
