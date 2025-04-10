const express = require('express')
const comprasController = require('../controllers/comprasControllers')

const router = express.Router();

// Ruta para listar compras
router.get("/listar", comprasController.listarCompras);

router.post("/agregar", comprasController.agregarCompra);

router.put("/:id", comprasController.actualizarCompra);

router.delete("/:id", comprasController.eliminarCompra);






module.exports= router;