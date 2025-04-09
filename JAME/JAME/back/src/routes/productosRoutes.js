const express = require('express')
const productosControllers = require('../controllers/productosController')

const router = express.Router();

// Ruta para listar usuarios
router.get("/listar", productosControllers.listarProductos);

router.get("/listar/:id", productosControllers.listar);

router.post("/agregar", productosControllers.agregarProducto)

router.delete("/eliminar/:id", productosControllers.eliminarProducto)

router.put("/actualizar/:id", productosControllers.actualizarProducto)

module.exports = router;