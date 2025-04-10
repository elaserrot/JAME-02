const mysql = require('mysql')


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
    console.log('Conectado a la base de datos MySQL pedido');
    });  

// Controlador para obtener todos los pedidos
exports.listarPedidos = (req, res) => {
    const query = "SELECT * FROM pedidos";
    conexion.query(query, (err, rows) => {
        if (err) {
            console.error('Error al obtener los pedidos:', err.message);
            res.status(500).json({ mensaje: 'Error al obtener los pedidos' });
            } else {
                res.json(rows);
                }
    });
};
//Controlador para agregar un pedido
exports.agregarPedido = async (req, res) => {
    const { id_usuario, fecha, metodoPago, descripcion } = req.body;
    if (!id_usuario || !fecha || !metodoPago || !descripcion) {
        return res.status(400).json({ message: "Completa todos los datos para agregar un pedido" });
    }
    const query = "INSERT INTO pedidos (id_usuario, fecha, metodoPago, descripcion) VALUES (?, ?, ?, ?)";
    conexion.query(query, [id_usuario, fecha, metodoPago, descripcion], (err, result) => {
        if (err) {
            console.error('Error al agregar el pedido:', err.message);
            res.status(500).json({ mensaje: 'Error al agregar el pedido' });
        } else {
            res.json({ mensaje: 'Pedido agregado correctamente' });
        }
    });
};
//Controlador para eliminar un pedido
exports.eliminarPedido = (req, res) => {
    const { id } = req.params;

    conexion.query('DELETE FROM pedidos WHERE id_pedido = ?', [id], (error, resultado) => {
        if (error) {
            console.error('Error al eliminar el pedido:', error);
            return res.status(500).json({ mensaje: 'Error al eliminar el pedido' });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'pedido no encontrado con ese ID' });
        }

        res.status(200).json({ mensaje: 'pedido eliminado correctamente' });
    });
};
//Controlador para actualizar un pedido
exports.actualizarPedido = async (req, res) => {
    
    const { id } = req.params;  
    const { id_usuario, fecha, metodoPago, descripcion  } = req.body;  

   

    const q = "UPDATE pedidos SET id_usuario = ?, fecha = ?, metodoPago = ?, descripcion = ? WHERE id_pedido = ?";  

    conexion.query(q, [id_usuario, fecha, metodoPago, descripcion, id], (err, result) => {
        if (err) {
            
            return res.status(500).json({ error: "Error al actualizar el pedido", details: err.sqlMessage });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Pedido no encontrado con ese ID" });
        }

        res.status(200).json({ message: "Pedido actualizado correctamente" });
    });
};