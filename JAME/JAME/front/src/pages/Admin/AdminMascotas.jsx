import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function AdminMascotas() {
    
    const [mascotas, setMascotas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [mascotaEncontrada, setMascotaEncontrada] = useState(null);

    useEffect(() => {
        // Simulación de carga de datos
        const data = [
            { id: 1, nombre: 'keyla', especie: 'Perro', raza: 'Bulldog french', edad: 3, dueño: 'alisson' },
            { id: 2, nombre: 'Napoleon', especie: 'Perro', raza: 'Bulldog french', edad: 2, dueño: 'Juan José' },
            { id: 3, nombre: 'Rocky', especie: 'Gato', raza: 'leopardo', edad: 4, dueño: 'Carlos' },
            { id: 4, nombre: 'Toby', especie: 'Perro', raza: 'labrador', edad: 1, dueño: 'José' },
            { id: 5, nombre: 'Jack', especie: 'Gato', raza: 'tigrillo', edad: 2, dueño: 'Lucas' }
        ];
        console.log("Cargando mascotas:", data);
        setMascotas(data);
    }, []);
    const eliminarMascota = (id) => {
        setMascotas(mascotas.filter(mascota => mascota.id !== id));
    };
    const buscarMascota = () => {
        const mascota = mascotas.find(m => m.id === parseInt(busqueda));
        setMascotaEncontrada(mascota);
    };


    return (
        <div className="vh-100 d-flex flex-column">
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
                <div className="bg-dark text-white p-0 d-flex flex-column" style={{ width: '200px' }}>
                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action bg-success text-white py-3">
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
                
                <div className="flex-grow-1 bg-light p-4">
                    <h3 className="mb-4">Listado de Mascotas</h3>
                    <div className="d-flex gap-2 mt-2">
                    <Link to={'agregarMascota'}><button className="btn btn-success mb-4">Agregar Mascota</button></Link>
                    <Link to='/administrador'><button className="btn btn-primary mb-4" onClick={() => volver(mascota.id)}>Volver a Inicio</button></Link>
                    </div>
                    {/* Buscador de mascota */}
                    <div className="mb-3 d-flex gap-2">
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Buscar por ID" 
                            value={busqueda} 
                            onChange={(e) => setBusqueda(e.target.value)} 
                        />
                        <button className="btn btn-info" onClick={buscarMascota}>Buscar</button>
                    </div>
                    
                    {mascotaEncontrada && (
                        <div className="alert alert-success">
                            <h5>{mascotaEncontrada.nombre}</h5>
                            <p><strong>Especie:</strong> {mascotaEncontrada.especie}</p>
                            <p><strong>Raza:</strong> {mascotaEncontrada.raza}</p>
                            <p><strong>Edad:</strong> {mascotaEncontrada.edad} años</p>
                            <p><strong>Propietario:</strong> {mascotaEncontrada.propietario}</p>
                        </div>
                    )}
                    <div className="row">
                        {Array.isArray(mascotas) && mascotas.length > 0 ? (
                            mascotas.map(mascota => (
                                <div key={mascota.id} className="col-md-4">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4 className="card-title">{mascota.nombre}</h4>
                                            <p className="card-text"><strong>Especie:</strong> {mascota.especie}</p>
                                            <p className="card-text"><strong>Raza:</strong> {mascota.raza}</p>
                                            <p className="card-text"><strong>Edad:</strong> {mascota.edad} años</p>
                                            <p className="card-text"><strong>Dueño:</strong> {mascota.dueño}</p>
                                             <button className="btn btn-danger mt-2" onClick={() => eliminarMascota(mascota.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No hay mascotas registradas</p>
                            </div>
                        )}
                        
                    </div>
                </div>
        </div>
            <Footer />
        </div>
    );
}
