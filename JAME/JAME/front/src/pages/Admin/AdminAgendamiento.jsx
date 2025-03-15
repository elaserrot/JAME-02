import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
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
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-house me-2"></i> Inicio
                        </a>


                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-cart me-2"></i> Ventas
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-success text-white py-3">
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


                {/* Main Content - Agendamientos */}
        <div className="flex-grow-1 bg-light p-4">
        <h3 className="mb-4 text-gray-800 font-bold text-xl">Agendamientos de citas</h3>
    
    {/* Formulario para agendar cita */}
    <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h4 className="text-lg font-semibold mb-2">Nueva Cita</h4>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
                type="text" 
                placeholder="Nombre del Cliente" 
                className="p-2 border rounded"
            />
            <input 
                type="text" 
                placeholder="Nombre de la Mascota" 
                className="p-2 border rounded"
            />
            <input 
                type="date" 
                className="p-2 border rounded"
            />
            <input 
                type="time" 
                className="p-2 border rounded"
            />
            <input 
                type="text" 
                placeholder="Motivo de la Cita" 
                className="p-2 border rounded col-span-2"
            />
            <button 
                type="submit" 
                className="bg-green-500 bg-success text-white px-4 py-2 rounded hover:bg-green-700 col-span-2"
            >
                Agendar Cita
            </button>
        </form>
    </div>

    {/* Tabla de citas agendadas */}
    <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="text-lg font-semibold mb-2">Citas Programadas</h4>
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200 text-gray-700">
                    <th className="border p-2">Cliente</th>
                    <th className="border p-2">Mascota</th>
                    <th className="border p-2">Fecha</th>
                    <th className="border p-2">Hora</th>
                    <th className="border p-2">Motivo</th>
                    <th className="border p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td className="border p-2">Juan Pérez</td>
                    <td className="border p-2">Firulais</td>
                    <td className="border p-2">2025-03-20</td>
                    <td className="border p-2">10:00 AM</td>
                    <td className="border p-2">Vacunación</td>
                    <td className="border p-2">
                        <button className="bg-blue-500 bg-primary text-white px-3 py-1 rounded mr-2">Editar</button>
                        <button className="bg-red-500 bg-danger text-white px-3 py-1 rounded">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
            </div>

            <Footer />
        </div>
    );
}

