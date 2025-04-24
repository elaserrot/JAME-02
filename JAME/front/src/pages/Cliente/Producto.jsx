import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer'
import Navegacion from '../../components/Navegacion'
import axios from "axios";
import Swal from 'sweetalert2';

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
            <div className="container my-4">
                <div className="row">
                    {/* Columna de imágenes (izquierda) */}
                    <div className="col-md-8">
                        {/* Imágenes en miniatura */}
                        <div className="d-flex" style={{ height: "200px", width: "100%" }}>
                            <img
                                src="src/img/Royal2.png"
                                className="img-thumbnail me-2 w-25"
                                alt="Imagen pequeña 4"
                                data-bs-target="#carouselExample"
                                data-bs-slide-to="3"
                            />
                        </div>
                    </div>

                    {/* Columna de descripción (derecha) */}
                    <div className="col-md-4">
                        <div className="mt-4">
                            <h2>{producto?.nombre_producto}</h2>
                            <p>
                                {producto?.descripcion}
                            </p>
                            <button className="bg-success">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
