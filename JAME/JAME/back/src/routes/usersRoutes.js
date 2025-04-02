import express from "express";
import usersController from "../controllers/usersControllers.js";

const router = express.Router();

// Ruta para listar usuarios
router.get("/listar", usersController.listarUsuarios);

export default router;
