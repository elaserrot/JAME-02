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
    console.log('Conectado a la base de datos MySQL mascotas');
    });
    
 
    

// Controlador para listar mascotas
exports.listarMascota = async (req, res) => {
    const q = "SELECT * FROM mascotas";
    conexion.query(q, (err, resultado) =>{
        if (err){
            console.log(err)
            res.status(500).json("Error al obtener los resultados")
        }
        res.status(200).json(resultado)
    })
};


// Controlador para agregar mascota
exports.agregarMascota = async (req, res) => {
    const { nombre, edad, raza, dueño} = req.body;
    if ( !nombre || !edad || !raza || !dueño) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }
    const q = "INSERT INTO mascotas (nombre, edad, raza, dueño) VALUES (?, ?, ?, ?)";
    conexion.query(q, [nombre, edad, raza, dueño], (err,
        resultado) => {
            if (err) {
                console.log(err)
                res.status(500).json("Error al agregar la mascota")
                }
                res.status(200).json("Mascota agregada con éxito")
    })
};

//Controlador para eliminar mascota
exports.eliminarMascota = (req, res) => {
    const { id } = req.params;

    conexion.query('DELETE FROM mascotas WHERE ID_Mascota = ?', [id], (error, resultado) => {
        if (error) {
            console.error('Error al eliminar la mascota:', error);
            return res.status(500).json({ mensaje: 'Error al eliminar la mascota' });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Mascota no encontrada' });
        }

        res.status(200).json({ mensaje: 'Mascota eliminada correctamente' });
    });
};

//Controlador para actualizar mascota
exports.actualizarMascota = (req, res) => {
    const { id } = req.params;
    const { nombre, edad, raza, dueño } = req.body;
    if (!nombre || !edad || !raza || !dueño) {
        return res.status(400).json({ error: "Todos los campos son obligatorios"
            });
            }
            const q = "UPDATE mascotas SET nombre = ?, edad = ?, raza = ?, dueño = ? WHERE ID_Mascota = ?";
            conexion.query(q, [nombre, edad, raza, dueño, id], (err
                , resultado) => {
                    if (err) {
                        console.log(err)
                        res.status(500).json("Error al actualizar la mascota")
                        }
                        res.status(200).json("Mascota actualizada con éxito")
            })
};

// Controlador para editar un solo dato 
exports.editarMascota = (req, res) => {
        const { id } = req.params;
        const { nombre, edad, raza, dueño } = req.body;
    
        // Verificar si al menos un campo fue enviado para actualizar
        if (!nombre && !edad && !raza && !dueño) {
            return res.status(400).json({ error: "Debe enviar al menos un campo para actualizar" });
        }
    
        // Construcción dinámica de la consulta SQL
        let campos = [];
        let valores = [];
    
        if (nombre) {
            campos.push("nombre = ?");
            valores.push(nombre);
        }
        if (edad) {
            campos.push("edad = ?");
            valores.push(edad);
        }
        if (raza) {
            campos.push("raza = ?");
            valores.push(raza);
        }
        if (dueño) {
            campos.push("dueño = ?");
            valores.push(dueño);
        }
    
        valores.push(id); // Agregar el ID al final para la condición WHERE
    
        const q = `UPDATE mascotas SET ${campos.join(", ")} WHERE ID_Mascota = ?`;
    
        conexion.query(q, valores, (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Error al actualizar la mascota", details: err.sqlMessage });
            }
    
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Mascota no encontrada con ese ID" });
            }
    
            res.status(200).json({ message: "Mascota actualizada correctamente" });
        });
    };
    




