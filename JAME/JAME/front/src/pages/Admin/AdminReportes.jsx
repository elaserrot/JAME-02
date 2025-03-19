import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LineChart, Line } from "recharts";

const dataVentas = [
    { mes: "Enero", total: 4000 },
    { mes: "Febrero", total: 3000 },
    { mes: "Marzo", total: 5000 },
    { mes: "Abril", total: 4500 },
    { mes: "Mayo", total: 6000 },
];

const dataCitas = [
    { mes: "Enero", citas: 20 },
    { mes: "Febrero", citas: 15 },
    { mes: "Marzo", citas: 25 },
    { mes: "Abril", citas: 22 },
    { mes: "Mayo", citas: 30 },
];

export default function AdminReportes() {
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

                        <a href="/pedidos" className="list-group-item list-group-item-action bg-dark text-white py-3">

                            <i className="bi bi-box me-2"></i> Pedidos
                        </a>
                        <a href="/reportes" className="list-group-item list-group-item-action bg-success text-white py-3">
                            <i className="bi bi-bar-chart-line"></i> Reportes
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3 mt-auto">
                            <i className="bi bi-gear me-2"></i> Configuración
                        </a>
                    </div>
                </div>
                {/* Main Content - Reportes */}
<div className="flex-grow-1 bg-light p-4">
    <h3 className="mb-4 text-gray-800 font-bold text-xl">Reportes</h3>

    {/* Gráfico de Ventas */}
    <div className="card mt-4">
                        <div className="card-header bg-primary text-white">Ventas de la Semana</div>
                        <div className="card-body">
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataVentas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    </div>
    </div>
  <br />
    {/* Gráfico de Citas */}
    <div className="card mt-4">
                        <div className="card-header bg-primary text-white">Citas de la Semana</div>
                        <div className="card-body">
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataCitas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="citas" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </div>
    </div>

    {/* Reporte General en Tabla */}
    <div className="card mt-4">
                        <div className="card-header bg-primary text-white">Reporte General</div>
                        <div className="card-body">
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200 text-gray-700">
                    <th className="border p-2">Mes</th>
                    <th className="border p-2">Ventas Totales</th>
                    <th className="border p-2">Citas Agendadas</th>
                </tr>
            </thead>
            <tbody>
                {dataVentas.map((venta, index) => (
                    <tr key={index} className="text-center">
                        <td className="border p-2">{venta.mes}</td>
                        <td className="border p-2">${venta.total}</td>
                        <td className="border p-2">{dataCitas[index].citas}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>

            </div>




</div>

        <footer/>
        </div>
    );
}
