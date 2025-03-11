import React from "react";
import Footer from '../../components/Footer'
import Navegacion from '../../components/Navegacion'

const ProductView = () => {
    return (
        <div>
            {/* Navbar personal */}
            <Navegacion />
            <div className="container my-4">
                <div className="row">   
                    {/* Columna de imágenes (izquierda) */}
                    <div className="col-md-8">
                        {/* Carrusel de imágenes */}
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="src/img/Royal.jpg"
                                        className="d-block w-75"
                                        alt="Imagen grande 1"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="src/img/Royal2.png"
                                        className="d-block w-75"
                                        alt="Imagen grande 2"
                                    />
                                </div>  
                                <div className="carousel-item">
                                    <img
                                        src="src/img/Royal.jpg"
                                        className="d-block w-75 "
                                        alt="Imagen grande 3"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="src/img/Royal2.png"
                                        className="d-block w-75"
                                        alt="Imagen grande 4"
                                    />
                                </div>
                            </div>

                            {/* Controles del carrusel */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        {/* Imágenes en miniatura */}
                        <div className="d-flex" style={{ height: "200px", width: "100%" }}>
                            <img
                                src="src/img/Royal.jpg"
                                className="img-thumbnail me-2"
                                alt="Imagen pequeña 1"
                                data-bs-target="#carouselExample"
                                data-bs-slide-to="0"
                            />
                            <img
                                src="src/img/Royal2.png"
                                className="img-thumbnail me-2"
                                alt="Imagen pequeña 2"
                                data-bs-target="#carouselExample"
                                data-bs-slide-to="1"
                            />
                            <img
                                src="src/img/Royal.jpg"
                                className="img-thumbnail me-2"
                                alt="Imagen pequeña 3"
                                data-bs-target="#carouselExample"
                                data-bs-slide-to="2"
                            />
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
                            <h2>Purina® Dog Chow® Alta Proteína</h2>
                            <p>
                                <strong>Tamaños disponibles:</strong> 1 kg, 2 kg, 7.5 kg, 20 kg
                            </p>
                            <p>
                                Alimento completo y balanceado para perros adultos de todos los
                                tamaños, fórmula de alta proteína a base de carnes, pollo y huevo.
                            </p>
                            <h5>Beneficios:</h5>
                            <ul>
                                <li>Ayuda a mantener sus dientes limpios para una salud oral</li>
                                <li>Ayuda a mantener su corazón sano</li>
                                <li>Músculos y huesos más fuertes</li>
                                <li>Promueve un pelaje brillante</li>
                                <li>Ayuda a mantenerlo sano y en forma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductView;
