import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const data = [
    { name: 'Lunes', ventas: 200 },
    { name: 'Martes', ventas: 80 },
    { name: 'Miércoles', ventas: 65 },
    { name: 'Jueves', ventas: 90 },
    { name: 'Viernes', ventas: 120 },
    { name: 'Sábado', ventas: 150 },
    { name: 'Domingo', ventas: 100 }
];

export default function AdminVentas() {
    return (
        <div>
            <h3 className="mb-4">Gestión de Ventas</h3>
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
                            <Link to='/productos'><a href="#" className="btn btn-link">Ver más productos...</a></Link>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Últimas Ventas</div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cliente: Alisson Torres - $80.000</li>
                                <li className="list-group-item">Cliente: Juan José - $45.000</li>
                                <li className="list-group-item">Cliente: Diego - $60.000</li>
                            </ul>
                            <Link to='/clientes'><a href="#" className="btn btn-link">Ver historial completo...</a></Link>
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
    );
}

