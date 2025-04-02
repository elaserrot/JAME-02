const express = require('express')
const usersController = require('../controllers/usersControllers')

const router = express.Router();

// Ruta para listar usuarios
router.get("/listar", usersController.listarUsuarios);

router.post("/agregar", usersController.registrar)

module.exports = router;