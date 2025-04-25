import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';
const BACKEND_URL = 'http://localhost:3001';

export default function AdminAgendamiento() {

    const [citas, setCitas] = useState([]);

    const [isDataUpdated, setIsDataUpdated] = useState(false);

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                setIsDataUpdated(true);
                const response = await axios.get(`${BACKEND_URL}/api/citas/listarCitas`);
                setCitas(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCitas();
        setIsDataUpdated(false);
    }, [isDataUpdated]);

    return (
        <div className='row row-cols-2'>
            <div className="col">
                <h3 className="mb-4 text-gray-800 font-bold text-xl">Agendamientos de citas</h3>
                {/* Formulario para agendar cita */}
                <div className="card mt-4">
                    <div className="card-header bg-primary text-white">Nueva Cita</div>
                    <div className="card-body">
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
                </div>

                {/* Tabla de citas agendadas */}
                <div className="card mt-4">
                    <div className="card-header bg-primary text-white">Citas Agendadas</div>
                    <div className="card-body">
                        <table className="w-100 border-collapse border border-gray-300">
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
                                {citas.map((cita) => (
                                    <tr key={cita.id} className="text-center">
                                        <td className="border p-2">{cita.nombre_completo}</td>
                                        <td className="border p-2">{cita.Nombre_Mascota}</td>
                                        <td className="border p-2">{moment(cita.Fecha_Cita).format('YYYY-MM-DD')}</td>
                                        <td className="border p-2">{moment(cita.Fecha_Cita).format('HH:mm')}</td>
                                        <td className="border p-2">{cita.Motivo_Cita}</td>
                                        <td className="border p-2">
                                            <button className="bg-red-500 bg-danger text-white px-3 py-1 rounded">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* 📅 Calendario */}
            <div className="col">
                <div className="card mt-4">
                    <div className="card-header bg-primary text-white">Calendario de Citas</div>
                    <div className="card-body">
                        <Calendar
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}   