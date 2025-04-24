import React, { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:3001";

const ProductView = () => {

    const [producto, setProducto] = useState([]);
    console.log(producto);
    const id = window.location.pathname.split("/")[2];

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/productos/listar/${id}`);
                setProducto(response.data[0]);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };
        fetchProducto();
    }, [id]);
    return (
        <div>
            <div className="container mb-5 py-5">
                <div className="row mb-5">
                    {/* Columna de imágen (izquierda) */}
                    <div className="col-md-8">
                        {/* Imágen*/}
                        <div className="d-flex">
                            <img
                                src="https://placehold.co/600x400"
                                className="img-fluid me-2 "
                                alt="Imagen pequeña 4"
                                data-bs-target="#carouselExample"
                                data-bs-slide-to="3"
                            />
                        </div>
                    </div>
                    {/* Columna de descripción (derecha) */}
                    <div className="col-md-4">
                        <div className="mt-4">
                            <h2 className="fw-bold display-3">{producto?.nombre_producto}</h2>
                            <p>{producto?.nombre_Categoria}</p>
                            <p>{producto?.descripcion}</p>
                            <p className="display-6">${producto?.precio}</p>
                            <button className="btn btn-success"> <i className="bi bi-cart-plus me-2"></i>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
