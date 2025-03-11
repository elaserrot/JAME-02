import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function InicioAdmin() {
    return (
        <div className="vh-100 d-flex flex-column">
            {/* Header */}
            <header className="bg-primary text-white py-3 px-4 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <Link to="/administrador">
                        <img src="/src/img/logovet.png" alt="Logo Veterinaria" className="rounded-circle me-3" style={{ width: '90px', height: '90px' }} />
                    </Link>
                    <h2 className="m-0 text-center flex-grow-1">Administración Ciudad Canina</h2>
                </div>
                <div>
                    <button className="btn btn-outline-light me-2">Perfil</button>
                    <button className="btn btn-danger">Cerrar Sesión</button>
                </div>
            </header>

            <div className="d-flex flex-grow-1">
                {/* Sidebar */}
                <div className="bg-dark text-white p-0 d-flex flex-column" style={{ width: '200px' }}>
                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action bg-warning text-white py-3">
                            <i className="bi bi-house me-2"></i> Inicio
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-cart me-2"></i> Ventas
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-calendar2 me-2"></i> Agendamientos
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-box me-2"></i> Pedidos
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-bar-chart-line"></i> Reportes
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3 mt-auto">
                            <i className="bi bi-gear me-2"></i> Configuración
                        </a>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow-1 bg-light p-4">
                    <div className="row mb-5">
                        {/* Appointments Box */}
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">Agendados Hoy</div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Vacunación - Kira - 20/03/2024</li>
                                        <li className="list-group-item">Vacunación - Kira - 20/03/2024</li>
                                        <li className="list-group-item">Vacunación - Kira - 20/03/2024</li>
                                    </ul>
                                    <a href="#" className="btn btn-link">Ver más...</a>
                                </div>
                            </div>
                        </div>

                        {/* Orders Box */}
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">Pedidos Hoy</div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Purina - Kira - 20/03/2024</li>
                                        <li className="list-group-item">Nexgard - Keyla - 20/03/2024</li>
                                        <li className="list-group-item">Correa - Kira - 20/03/2024</li>
                                    </ul>
                                    <a href="#" className="btn btn-link">Ver más...</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Icons */}
                    <div className="row justify-content-center text-center">
                        <div className="col-2">
                            <button className="btn btn-light border p-4">
                                <i className="bi bi-gear fs-3"></i>
                                <div className="mt-2">Configuración</div>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-light border p-4">
                                <i className="bi bi-cloud fs-3"></i>
                                <div className="mt-2">Cloud</div>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-light border p-4">
                                <i className="fa fa-paw fs-3"></i>
                                <div className="mt-2">Mascotas</div>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-light border p-4">
                                <i className="bi bi-file-text fs-3"></i>
                                <div className="mt-2">Reportes</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}