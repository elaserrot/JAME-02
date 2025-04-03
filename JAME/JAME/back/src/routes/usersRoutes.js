const express = require('express')
const usersController = require('../controllers/usersControllers')

const router = express.Router();

// Ruta para listar usuarios
router.get("/listar", usersController.listarUsuarios);

router.post("/agregar", usersController.registrar)

router.delete("/eliminar/:id", usersController.eliminar)

router.put("/editar/:id", usersController.editar)



module.exports = router;       