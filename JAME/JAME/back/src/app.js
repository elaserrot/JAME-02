const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const usersRoutes = require('./routes/usersRoutes')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: '*',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
    allowedHeaders: 'Content-Type,Authorization',  
    credentials: true, 
};

app.use(cors(corsOptions));  


// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());

// Rutas
app.use('/api/usuarios', usersRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

