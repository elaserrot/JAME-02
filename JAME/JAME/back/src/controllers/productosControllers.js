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

app.get('/', (req, res) => {
    res.send('Mi Primer API')
})

app.get('/api/productos/login', (req, res) => {
    res.send("Esta Api permite hacer Login")
})



app.get('/api/productos/listar', async (req, res) => {
    const sql = 'SELECT * FROM productos'
    conexion.query(sql, (error, resultado) => {
        if (error) return console.error(error.message)
        if (resultado.length > 0) {
            console.log(resultado)
            res.json(resultado)
        } else {
            res.json('No hay registros')

        }
    })
})


app.get('/productos', (request, response) => {
    conexion.query("SELECT * FROM productos",
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results);
        });
});


app.get('/api/productos/:id', (req, res) => {
    const { id } = req.params
    const query = `SELECT * FROM productos WHERE id_producto=${id}`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            console.log(resultado)
            res.json(resultado)

        } else {
            res.json('No hay registros con ese ID')

        }
    });
});

app.post('/api/productos/agregar', (request, response) => {
    const { nombre_producto, descripcion, precio, stock } = request.body;

    // Validar los datos recibidos
    if (!nombre_producto || !precio || !stock) {
        return response.status(400).json({ message: "Faltan datos requeridos" });
    }

    conexion.query("INSERT INTO `productos`(`nombre_producto`, `descripcion`, `precio`, `stock`) VALUES (?,?,?,?)",
        [nombre_producto, descripcion, precio, stock],
        (error, results) => {
            if (error) {
                console.log("Error SQL:", error.sqlMessage);
                return response.status(500).json({ message: "Error al agregar el producto", error: error.sqlMessage });
            }
            console.log("Producto añadido con éxito:", results);
            response.status(201).json({ message: "Producto añadido correctamente", id: results.insertId });
        });
});



app.delete('/api/productos/eliminar/:id', (req, res) => {
    const { id } = req.params; // Obtenemos el id desde la URL
    const query = `DELETE FROM productos WHERE id_producto = ?`; // Consulta para eliminar el usuario

    // Ejecutamos la consulta SQL para eliminar el registro
    conexion.query(query, [id], (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ message: "Hubo un error al intentar eliminar el usuario." });
        }

        else if (results.affectedRows > 0) {
            res.json({ message: `Usuario con ID ${id} eliminado correctamente.` });
        } else {
            res.status(404).json({ message: `No se encontró un usuario con el ID ${id}.` });
        }
    });
});

app.put('/api/productos/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { nombre_producto, descripcion, precio, stock } = req.body;


    if (!nombre_producto || !descripcion || !precio || !stock) {
        return res.status(400).json({ message: "Por favor, proporcione nombre, descripción, precio y stock." });
    }

    const query = `UPDATE productos SET nombre_producto = ?, descripcion = ?, precio = ?, stock = ? WHERE id_producto = ?`;

    conexion.query(query, [nombre_producto, descripcion, precio, stock, id], (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
        }

        if (results.affectedRows > 0) {
            return res.json({ message: `Producto con ID ${id} actualizado correctamente.` });
        } else {

            return res.status(404).json({ message: `No se encontró un producto con el ID ${id}.` });
        }
    });
});

