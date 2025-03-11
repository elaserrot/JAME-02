import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'
import Navegacion from '../../components/Navegacion'
export default function CarritoCompras() {
    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: "Alimento Premium para Perros",
            descripcion: "5kg, Sabor Pollo",
            precio: 50900,
            cantidad: 1,
            imagen: "/src/img/Royal.jpg"
        },
        {
            id: 2,
            nombre: "Juguete Interactivo para Gatos",
            descripcion: "Ratón Electrónico",
            precio: 38900,
            cantidad: 2,
            imagen: "/src/img/black.png"
        }
    ]);

    // Función para manejar el cambio de cantidad
    const manejarCantidad = (id, operacion) => {
        setProductos((prevProductos) =>
            prevProductos.map((producto) =>
                producto.id === id
                    ? {
                        ...producto,
                        cantidad: operacion === "incrementar"
                            ? producto.cantidad + 1
                            : Math.max(producto.cantidad - 1, 1) // Evitar cantidades menores a 1
                    }
                    : producto
            )
        );
    };

    return (
        <div>
            <div>
                {/* header */}
                <Navegacion />

                <div className="container my-5">
                    <h1 className="mb-4">Tu Carrito de Compras</h1>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Productos en tu carrito</h5>
                                    <hr />
                                    {productos.map((producto) => (
                                        <div className="row mb-3" key={producto.id}>
                                            <div className="col-md-3">
                                                <img
                                                    src={producto.imagen}
                                                    alt={producto.nombre}
                                                    className="img-fluid rounded"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <h6>{producto.nombre}</h6>
                                                <p className="text-muted">{producto.descripcion}</p>
                                                <div
                                                    className="input-group input-group-sm"
                                                    style={{ width: "120px" }}
                                                >
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                        onClick={() => manejarCantidad(producto.id, "decrementar")}
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="text"
                                                        className="form-control text-center"
                                                        value={producto.cantidad}
                                                        readOnly
                                                    />
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                        onClick={() => manejarCantidad(producto.id, "incrementar")}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-3 text-end">
                                                <p className="fw-bold">
                                                    ${(producto.precio * producto.cantidad).toFixed(2)}
                                                </p>
                                                <button className="btn btn-sm btn-outline-danger">
                                                    <i className="fas fa-trash"></i> Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Resumen del Pedido</h5>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Subtotal</span>
                                        <span>
                                            $
                                            {productos
                                                .reduce(
                                                    (total, producto) =>
                                                        total + producto.precio * producto.cantidad,
                                                    0
                                                )
                                                .toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Envío</span>
                                        <span>$5.00</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-4">
                                        <span className="fw-bold">Total</span>
                                        <span className="fw-bold">
                                            $
                                            {(
                                                productos.reduce(
                                                    (total, producto) =>
                                                        total + producto.precio * producto.cantidad,
                                                    0
                                                ) + 5.0
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                    <button className="btn btn-primary w-100">Proceder al Pago</button>
                                </div>
                            </div>
                            <div className="mt-3">
                                <Link to={"/productos"} className="text-decoration-none">
                                    <i className="fas fa-arrow-left me-2"></i>Continuar Comprando
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
