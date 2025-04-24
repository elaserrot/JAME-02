require("dotenv").config()
// Inicialización del cliente
exports.listarCarrito = (req, res) => {
    const id = req.params.id
    conexion.query('SELECT * FROM carrito WHERE id_usuario = ?', [id], (error, resultado) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: "Error al obtener los productos del carrito" });
        }
        res.status(200).json(resultado);
    });

}
exports.agregarProducto = (req, res) => {
    const id = req.params.id
    const { id_producto } = req.body
    conexion.query('INSERT INTO carrito (id_usuario, id_producto) VALUES (?, ?)', [id, id_producto], (error, resultado) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: "Error al agregar el producto al carrito" });
        }
        res.status(200).json({ message: "Producto agregado al carrito" });
    });
}