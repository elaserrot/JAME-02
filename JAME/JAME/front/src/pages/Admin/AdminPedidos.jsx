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
                        <a href="/administrador" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-house me-2"></i> Inicio
                        </a>
                        <a href="/ventas" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-cart me-2"></i> Ventas
                        </a>
                        <a href="/agendamientos" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-calendar2 me-2"></i> Agendamientos
                        </a>
                        <a href="/pedidos" className="list-group-item list-group-item-action bg-success text-white py-3">
                            <i className="bi bi-box me-2"></i> Pedidos
                        </a>
                        <a href="/reportes" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-bar-chart-line"></i> Reportes
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3 mt-auto">
                            <i className="bi bi-gear me-2"></i> Configuración
                        </a>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow-1 bg-light p-4">
                    <h3>Pedidos Pendientes</h3>
                    <div className="card p-4">
                        <div className="d-flex justify-content-between mb-3">
                            <button className="btn btn-outline-dark"><i className="bi bi-eye"></i></button>
                            <button className="btn btn-outline-dark"><i className="bi bi-funnel"></i></button>
                            <button className="btn btn-outline-dark"><i className="bi bi-file-earmark-spreadsheet"></i></button>
                            <button className="btn btn-outline-dark"><i className="bi bi-printer"></i></button>
                            <button className="btn btn-outline-dark"><i className="bi bi-search"></i></button>
                        </div>
                        <ul className="list-group">
                            {[...Array(4)].map((_, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    Luz Ariela - Mancha - Pedido de una purina MAX para cachorro raza Grande - 22/03/2024 - 3:00pm
                                    <div>
                                        <button className="btn btn-outline-success btn-sm me-2"><i className="bi bi-check"></i></button>
                                        <button className="btn btn-outline-danger btn-sm"><i className="bi bi-trash"></i></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-success mt-3" style={{ width: '250px' }}>Ver calendario</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}