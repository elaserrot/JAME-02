import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());

// Rutas
app.use('/api/usuarios', usersRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

