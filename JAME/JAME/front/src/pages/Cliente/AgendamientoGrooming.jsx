import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from '../../components/Footer';
import Navegacion from '../../components/Navegacion';

export default function ServiciosGrooming() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Navegacion />
      <section className="bg-custom-blue py-5">
        <div className="container">
          <h2 className="text-center mb-2 fw-bold">AGENDAMIENTO DE GROOMING</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="mb-3">
                <select className="form-select">
                  <option>Seleccione el servicio</option>
                  <option>Corte</option>
                  <option>Baño</option>
                  <option>Corte y Baño</option>
                  <option>Baño y uñas</option>
                </select>
              </div>

              <div className="mb-3">
                <select className="form-select">
                  <option>Pelaje</option>
                  <option>Corto</option>
                  <option>Medio</option>
                  <option>Mediano</option>
                  <option>Largo</option>
                </select>
              </div>

              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="petType"
                    id="dog"
                    value="dog"
                  />
                  <label className="form-check-label" htmlFor="dog">
                    Perro
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="petType"
                    id="cat"
                    value="cat"
                  />
                  <label className="form-check-label" htmlFor="cat">
                    Gato
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="¿Otro. cuál?"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Nombre Mascota"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Nombre del cliente"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Raza de la mascota"
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="bg-light p-4 text-center">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  minDate={new Date()} // Bloquea fechas pasadas
                />
                <p className="mt-3">Fecha seleccionada: {selectedDate.toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 text-center">
              <button className="btn btn-success mx-2">AGENDAR</button>
              <button className="btn btn-danger mx-2">Cancelar</button>
              <button className="btn btn-info mx-2 text-white">Limpiar</button>
            </div>
          </div>

          <div className="text-center mt-5">
            <div className="d-inline-flex align-items-center bg-white rounded-pill px-4 py-2 shadow-sm">
              <svg width="24" height="24" fill="#25D366" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13C14.09 12.94 13.84 13.1 13.59 13.35C13.34 13.6 12.97 14.23 12.72 14.48C12.47 14.74 12.21 14.77 11.97 14.63C11.72 14.5 10.91 14.24 9.95 13.37C9.2 12.71 8.69 11.89 8.43 11.63C8.18 11.38 8.42 11.13 8.63 10.91C9.07 10.43 9.5 9.93 9.58 9.67C9.66 9.42 9.62 9.21 9.56 9.02C9.5 8.83 8.97 7.59 8.76 7.09C8.55 6.6 8.33 6.67 8.08 6.66C7.84 6.65 7.69 6.65 7.53 6.65C7.37 6.65 7.1 6.71 6.87 6.96C6.65 7.21 6 7.82 6 9.03C6 10.25 6.89 11.42 7 11.59C7.14 11.76 8.76 14.26 11.25 15.32C12.84 16.02 13.3 16.07 13.66 16.18C14.25 16.37 14.79 16.34 15.22 16.28C15.7 16.21 16.68 15.68 16.89 15.1C17.1 14.52 17.1 14.03 17.04 13.92C16.97 13.82 16.81 13.76 16.56 13.65Z" />
              </svg>
              <span className="ms-2">Para más información contáctenos por medio de WhatsApp</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
