import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const AgendamientoMedicina = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [servicio, setServicio] = useState('');
    const [pelaje, setPelaje] = useState('');
    const [tipoMascota, setTipoMascota] = useState('');
    const [nombreMascota, setNombreMascota] = useState('');
    const [raza, setRaza] = useState('');

    const token = localStorage.getItem('token');
    const decoded_token = JSON.parse(atob(token.split('.')[1]));
    const id = decoded_token.id;

    const handleAgendar = async () => {
        try {
            const nuevaCita = {
                Usuario: id,
                Fecha: selectedDate.toISOString().split('T')[0],
                Motivo: servicio,
                Estado: 'pendiente',
                Mascota: nombreMascota
            };

            const response = await axios.post('http://localhost:3001/api/citas/agregarCita', nuevaCita);
            alert('Cita agendada con éxito');
        } catch (error) {
            console.error('Error al agendar la cita:', error);
            alert('Hubo un error al agendar la cita');
        }
    };

    function formatDateToLocalInput(date) {
        const pad = (n) => n.toString().padStart(2, '0');

        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div className="container mt-5" style={{ flex: 1 }}>
            <h2 className="text-center mb-4">Agendamiento de Medicina</h2>

            <div className="row">
                <div className="col-md-6">
                    <label>Servicio:</label>
                    <input
                        type="text"
                        className="form-control mb-3 bg-light"
                        max={200}
                        onChange={(e) => setServicio(e.target.value)}
                        placeholder="Servicio"
                    />

                    <label>Tipo de mascota:</label>
                    <select
                        className="form-select mb-3"
                        onChange={(e) => setTipoMascota(e.target.value)}
                    >
                        <option value="">Seleccione el tipo</option>
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                    </select>

                    <label>Fecha:</label>
                    <input
                        className="mb-3 bg-light"
                        type="datetime-local"
                        onChange={(e) => setSelectedDate(new Date(e.target.value))}
                        value={formatDateToLocalInput(selectedDate)}
                    />
                </div>

                <div className="col-md-6">
                    <label>Nombre de la mascota:</label>
                    <input
                        type="text"
                        className="form-control mb-3 bg-light"
                        placeholder="Nombre Mascota"
                        onChange={(e) => setNombreMascota(e.target.value)}
                    />

                    <label>Raza:</label>
                    <input
                        type="text"
                        className="form-control mb-3 bg-light"
                        placeholder="Raza"
                        onChange={(e) => setRaza(e.target.value)}
                    />

                    <button className="btn btn-success mt-3 w-100" onClick={handleAgendar}>
                        AGENDAR
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

};

export default AgendamientoMedicina;