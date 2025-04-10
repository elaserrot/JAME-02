
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const usersRoutes = require('./routes/usersRoutes')
const mascotasRoutes = require('./routes/mascotasRoutes')
const citasRoutes = require('./routes/citasRoutes')
const rolesRoutes = require('./routes/rolesRoutes');
const productosRoutes = require('./routes/productosRoutes')
const comprasRoutes = require('./routes/comprasRoutes')

const pedidoRoutes = require('./routes/pedidoRoutes')
const categoriaRoutes = require('./routes/categoriaRoutes')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');





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

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Rutas
app.use('/api/usuarios', usersRoutes);
app.use('/api/mascota', mascotasRoutes);
app.use('/api/citas', citasRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/compras', comprasRoutes);






app.use('/api/pedidos', pedidoRoutes);
app.use('/api/categorias', categoriaRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

