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
        <div>
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
    );
}
