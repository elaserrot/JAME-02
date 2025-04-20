const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers');
const { verificarToken, verificarRol } = require('../middlewares/authMiddleware');
const upload = require("../middlewares/uploadMiddleware");


// Rutas protegidas solo para admin
router.get("/listar", verificarToken, verificarRol("admin"), usersController.listarUsuarios);

// Registro de usuario (público)
router.post("/agregar", usersController.registrar);

// Eliminar usuario (restringido a admin si deseas)
router.delete("/eliminar/:id", verificarToken, verificarRol("admin"), usersController.eliminar);

// Editar usuario (admin o el mismo usuario)
router.put("/editar/:id", verificarToken, usersController.editar);

// Actualización parcial del usuario
router.patch("/actualizar/:id", verificarToken, usersController.actualizar);

// Login
router.post("/login", usersController.login);

// Obtener perfil del usuario autenticado
router.get("/perfil", verificarToken, usersController.obtenerPerfil);

// Actualizar perfil completo (autenticado)
router.put("/:id", verificarToken, upload.single("imagen"), usersController.actualizarUsuario);

module.exports = router;
