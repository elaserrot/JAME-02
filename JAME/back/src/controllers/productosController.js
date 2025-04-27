// productosController.js

// Listar todos los productos
exports.listarProductos = (req, res) => {
    const sql = 'SELECT * FROM productos INNER JOIN categorias ON productos.id_cate = categorias.id_cate WHERE productos.estado = 1 ORDER BY id_producto DESC';
    conexion.query(sql, (error, resultado) => {
        if (error) return console.error(error.message);
        res.status(200).json(resultado);
    });
};

exports.listarLimitado = (req, res) => {
    const sql = 'SELECT * FROM productos WHERE productos.estado = 1 ORDER BY id_producto DESC LIMIT 5 ';
    conexion.query(sql, (error, resultado) => {
        if (error) return console.error(error.message);
        res.status(200).json(resultado);
    });
};

// Listar un producto por ID
exports.listarProductoPorId = (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM productos WHERE id_producto = ${id}`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);
        res.status(200).json(resultado);
    });
};

// Agregar un producto
exports.agregarProducto = (req, res) => {
    const { nombre_producto, descripcion, precio, stock, categoria } = req.body;
    const imagen = req.file ? req.file.filename : null;
    console.log(imagen);

    if (!nombre_producto | !descripcion || !precio || !stock, !req.file, !categoria) {
        return res.status(400).json({ message: "Faltan datos requeridos" });
    }

    conexion.query('SELECT * FROM productos WHERE nombre_producto = ?', [nombre_producto], (error, resultado) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ message: "Error al agregar el producto", error: error.message });
        }
        if (resultado.length > 0) {
            return res.status(400).json({ message: "Ya existe un producto con ese nombre" });
        }

        const sql = "INSERT INTO productos (nombre_producto, descripcion, precio, stock, imagen, id_cate) VALUES (?, ?, ?, ?, ?, ?)";
        conexion.query(sql, [nombre_producto, descripcion, precio, stock, imagen, categoria], (error, resultado) => {
            if (error) {
                console.log("Error SQL:", error.sqlMessage);
                return res.status(500).json({ message: "Error al agregar el producto", error: error.sqlMessage });
            }
            res.status(200).json({ message: "Producto añadido correctamente", id: resultado.insertId });
        });
    });
};

// Eliminar un producto
exports.eliminarProducto = (req, res) => {
    const { id } = req.params;
    const query = `UPDATE productos SET estado = 0 WHERE id_producto = ?`;
    conexion.query(query, [id], (error, resultado) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ message: "Error al eliminar el producto" });
        }
        if (resultado.affectedRows > 0) {
            res.json({ message: `Producto con ID ${id} eliminado correctamente.` });
        } else {
            res.status(404).json({ message: `No se encontró un producto con el ID ${id}` });
        }
    });
};

// Actualizar un producto
exports.actualizarProducto = (req, res) => {
    const { id } = req.params;
    const { nombre_producto, descripcion, precio, stock } = req.body;

    if (!nombre_producto || !descripcion || !precio || !stock) {
        return res.status(400).json({ message: "Por favor, proporcione nombre, descripción, precio y stock." });
    }

    const query = `UPDATE productos SET nombre_producto = ?, descripcion = ?, precio = ?, stock = ? WHERE id_producto = ?`;
    conexion.query(query, [nombre_producto, descripcion, precio, stock, id], (error, resultado) => {
        if (error) {
            console.error(error.message);
            return res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
        }
        if (resultado.affectedRows > 0) {
            res.json({ message: `Producto con ID ${id} actualizado correctamente.` });
        } else {
            res.status(404).json({ message: `No se encontró un producto con el ID ${id}` });
        }
    });
};
