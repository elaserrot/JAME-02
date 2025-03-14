import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const data = [
    { name: 'Lunes', ventas: 50 },
    { name: 'Martes', ventas: 80 },
    { name: 'Miércoles', ventas: 65 },
    { name: 'Jueves', ventas: 90 },
    { name: 'Viernes', ventas: 120 },
    { name: 'Sábado', ventas: 150 },
    { name: 'Domingo', ventas: 100 }
];

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
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-house me-2"></i> Inicio
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-warning text-white py-3">

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

                {/* Main Content - Ventas */}
                <div className="flex-grow-1 bg-light p-4">
                    <h3 className="mb-4">Gestión de Ventas</h3>
                    <button className="btn btn-success mb-3">Agregar Nueva Venta</button>
                    
                    <div className="row">
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header bg-primary text-white">Productos Disponibles</div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Purina Dog Chow - $50.000</li>
                                        <li className="list-group-item">Collar Antipulgas - $30.000</li>
                                        <li className="list-group-item">Juguete para Perros - $20.000</li>
                                    </ul>
                                    <a href="#" className="btn btn-link">Ver más productos...</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card">
                                <div className="card-header bg-primary text-white">Últimas Ventas</div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cliente: Alisson Torres - $80.000</li>
                                        <li className="list-group-item">Cliente: María Gómez - $45.000</li>
                                        <li className="list-group-item">Cliente: Carlos Ramírez - $60.000</li>
                                    </ul>
                                    <a href="#" className="btn btn-link">Ver historial completo...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gráfico de Ventas */}
                    <div className="card mt-4">
                        <div className="card-header bg-primary text-white">Ventas de la Semana</div>
                        <div className="card-body">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="ventas" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
