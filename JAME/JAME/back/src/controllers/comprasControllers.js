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
    console.log('Conectado a la base de datos MySQL');
    });  

// Controlador para listar las compras 
exports.listarCompras = async (req, res) => {
    const q = "SELECT * FROM compras";
    conexion.query(q, (err, resultado) =>{
        if (err){
            console.log(err)
            res.status(500).json("Error al obtener los resultados")
        }
        res.status(200).json(resultado)
    })
};

// Controlador para agregar compras
exports.agregarCompra = async (req, res) => {
    const {
        ID_Compra,Fecha,Cantidad,Descripción,MetodoPago,NumeroFactura,PrecioUnitario,Precio_Total,ID_producto
    } = req.body;

    if (
        !ID_Compra || !Fecha || !Cantidad || !Descripción || !MetodoPago ||
        !NumeroFactura || !PrecioUnitario || !Precio_Total || !ID_producto
    ) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const q = `
        INSERT INTO compras 
        (ID_Compra, Fecha, Cantidad, Descripción, MetodoPago, NumeroFactura, PrecioUnitario, Precio_Total, ID_producto) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    conexion.query(q, [
        ID_Compra,Fecha,Cantidad,Descripción,MetodoPago,NumeroFactura,PrecioUnitario,Precio_Total,ID_producto
    ], (err, resultado) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error al agregar la compra");
        }

        res.status(200).json("Compra agregada con éxito");
    });
};

exports.actualizarCompra = async (req, res) => {
    const { id } = req.params;
    const { NumeroFactura } = req.body;

    if (!NumeroFactura) {
        return res.status(400).json({ error: "El campo NumeroFactura es obligatorio" });
    }

    const q = "UPDATE compras SET NumeroFactura = ? WHERE ID_Compra = ?";
    conexion.query(q, [NumeroFactura, id], (err, resultado) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error al actualizar la compra");
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: "Compra no encontrada" });
        }

        res.status(200).json("Compra actualizada correctamente");
    });
};

// Controlador para eliminar una compra por ID_Compra
exports.eliminarCompra = async (req, res) => {
    const { id } = req.params;

    const q = "DELETE FROM compras WHERE ID_Compra = ?";

    conexion.query(q, [id], (err, resultado) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error al eliminar la compra");
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: "Compra no encontrada" });
        }

        res.status(200).json("Compra eliminada correctamente");  
    });
};


