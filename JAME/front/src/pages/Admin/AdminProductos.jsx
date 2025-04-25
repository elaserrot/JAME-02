import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2';

const BACKEND_URL = 'http://localhost:3001';

export default function AdminProductos() {

    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [isDataUpdated, setIsDataUpdated] = useState(false);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/productos/listar`);
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };
        obtenerProductos();
        setIsDataUpdated(false);
    }, [isDataUpdated]);

    const eliminarProducto = async (id) => {
        const confirm = await Swal.fire({
            icon: 'question',
            title: 'Eliminar producto',
            text: '¿Estás seguro de eliminar esta producto?',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar',
        });
        if (!confirm.isConfirmed) {
            return;
        }
        const response = await axios.delete(`${BACKEND_URL}/api/productos/eliminar/${id}`)
        if (response.status === 200) {
            await Swal.fire({
                icon: 'success',
                title: 'Producto eliminado',
                text: 'El producto ha sido eliminada con éxito.',
            })
            setIsDataUpdated(true);
        }
    };

    const productosFiltrados = productos
        .filter(producto => {
            const term = busqueda.toLowerCase();
            const producto_nombre = producto.nombre_producto.toLowerCase();
            return (
                producto_nombre.toLowerCase().includes(term)
            );
        });

    const formatNumber = (value) => {
        const formattedValue = value.toString().replace(/\D/g, '');
        return formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    return (
        <div>
            <h2 className="mb-4"> Productos</h2>
            <div className="d-flex gap-2 mt-2">

                <Link to='/agregarProducto'><button className="btn btn-primary mb-4">Agregar Nuevo Producto</button></Link>
                <Link to='/administrador'><button className="btn btn-primary mb-4">Volver a Inicio</button></Link>

            </div>
            {/* Buscador de productos */}
            <div className="mb-3 d-flex gap-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar producto"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>
            {/* Lista de productos */}
            <div className="row">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map(producto => (
                        <div id={producto.id_producto} key={producto.id_producto} className="col-md-12">
                            <div className="card mb-4">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <img
                                        src={`${BACKEND_URL}/PRODUCTOS_FOTOS/${producto?.imagen}`}
                                        alt={producto?.nombre_producto}
                                        className="rounded"
                                        style={{ height: "100px", width: "100px", objectFit: "cover" }} />
                                    <h4 className="card-title">{producto.nombre_producto}</h4>
                                    <div className="d-flex gap-2 mt-2">
                                        <button className="btn btn-primary" onClick={() => setProductoSeleccionado(producto)}>Ver producto</button>
                                        <button className="btn btn-danger" onClick={() => eliminarProducto(producto.id_producto)}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No hay productos registrados</p>
                    </div>
                )}
            </div>

            {/* Modal para mostrar información del producto */}
            <Modal show={productoSeleccionado !== null} onHide={() => setProductoSeleccionado(null)} size="xl">
                <Modal.Header closeButton className="bg-primary text-white">
                    <Modal.Title><h1>{productoSeleccionado?.nombre_producto}</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row d-flex align-items-start">
                            <div className="col-md-4">
                                <img
                                    src={`${BACKEND_URL}/PRODUCTOS_FOTOS/${productoSeleccionado?.imagen}`}
                                    alt={productoSeleccionado?.nombre_producto}
                                    className="img-fluid rounded"
                                    style={{ height: "300px", objectFit: "cover" }} />
                            </div>
                            <div className="col-md-8">
                                <p><b><strong>Titulo: </strong></b>{productoSeleccionado?.nombre_producto}</p>
                                <p><b><strong>Precio: </strong></b>${formatNumber(productoSeleccionado?.precio || 0)}</p>
                                <p><b><strong>Stock: </strong></b> {productoSeleccionado?.stock} {productoSeleccionado?.stock > 1 ? "unidades" : "unidad"}</p>
                                <p><b><strong>Descripción: </strong></b>{productoSeleccionado?.descripcion || "No hay observaciones registradas."}</p>
                                <p><b><strong>Categoria: </strong></b>{productoSeleccionado?.nombre_Categoria}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setProductoSeleccionado(null)}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
