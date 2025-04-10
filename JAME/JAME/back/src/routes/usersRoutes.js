const express = require('express')
const routes = express.Router();
const usersController = require('../controllers/usersControllers')
const { verificarToken, verificarRol } = require('../middlewares/authMiddleware');

const router = express.Router();

// Ruta para listar usuarios protegida - solo admin
router.get("/listar", verificarToken, verificarRol("admin"), usersController.listarUsuarios);

router.post("/agregar", usersController.registrar)

router.delete("/eliminar/:id", usersController.eliminar)

router.put("/editar/:id", usersController.editar)

router.patch("/actualizar/:id", usersController.actualizar)

router.post('/login', usersController.login);


module.exports = router;       