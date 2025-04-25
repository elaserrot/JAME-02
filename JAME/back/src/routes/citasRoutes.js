const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasControllers');

router.get("/listarCitas", citasController.listarCitas);

router.post("/agregarCita", citasController.agregarCita);

router.delete('/eliminarCita/:id',citasController.eliminarCita);

router.put("/actualizarCita/:id", citasController.actualizarCita);

router.patch("/actualizarCitaUnica/:id", citasController.actualizarCitaUnica);

module.exports = router;     