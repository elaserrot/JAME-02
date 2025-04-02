
import path from 'path'; //sirve para llegar a la ruta donde se encuentra la base de datos
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';


//nomenclatura de variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Crear la conexión a la base de datos
const conexion = await mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: '',
    database: 'jame'    
});

// Verificar la conexión
conexion.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err.message);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
    });

// Controlador para listar usuarios
const listarUsuarios = async (req, res) => {
    try {
      const [resultado] = await conexion.query('SELECT * FROM usuarios');
    if (resultado.length > 0) {
        console.log(resultado);
        res.json(resultado);
    } else {
        res.json('No hay registros');
    }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
    };

  // Exportar el controlador
    export default { listarUsuarios };





