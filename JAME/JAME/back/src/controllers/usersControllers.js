const mysql = require('mysql')
const bcrypt = require("bcrypt")

// Crear la conexión a la base de datos
const conexion = mysql.createConnection({
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
exports.listarUsuarios = async (req, res) => {
    const q = "SELECT * FROM usuarios";
    conexion.query(q, (err, resultado) =>{
        if (err){
            console.log(err)
            res.status(500).json("Error al obtener los resultados")
        }
        res.status(200).json(resultado)
    })
};

exports.registrar = async (req, res) => {   
    const { nombreCompleto, correoElectronico, usuario, contrasena } = req.body;
    if (!nombreCompleto || !correoElectronico || !usuario || !contrasena){
        return res.status(400).json({ error: 'debes completar todo los campos' });

    } 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(correoElectronico)) {
        return res.status(400).json({ error: 'El correo electrónico no es válido' });
    } 
    else if (contrasena.length < 8) {
        return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
    } 
    const passwordHash = bcrypt.hashSync(contrasena, 10)
    const q = "INSERT INTO `usuarios`( `nombre_completo`, `correo_electronico`, `usuario`, `contraseña`) VALUES (?)"
    const values = [
        nombreCompleto , correoElectronico, usuario, passwordHash
    ]
    conexion.query(q, [values], (err, resultado) => {
        if (err) {
            console.log(err)
            res.status(500).json("Error al registrar un usuario")
        }

        res.status(200).json("Usuario Registrado correctamente")
    })
}