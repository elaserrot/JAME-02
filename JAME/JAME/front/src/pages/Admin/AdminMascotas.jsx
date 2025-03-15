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
            { id: 1, nombre: 'keyla', especie: 'Perro', raza: 'Bulldog french', genero: 'masculino', edad: 3, dueño: 'alisson' },
            { id: 2, nombre: 'Napoleon',especie: 'Perro', raza: 'Bulldog french', genero: 'masculino', edad: 2, dueño: 'Juan José' },
            { id: 3, nombre: 'Rocky', especie: 'Gato',  raza: 'leopardo',       genero: 'masculino', edad: 1, dueño: 'Carlos' },
            { id: 4, nombre: 'Toby',  especie: 'Perro', raza: 'labrador',       genero: 'masculino', edad: 4, dueño: 'José' },
            { id: 5, nombre: 'Jack',  especie: 'Gato',  raza: 'tigrillo',       genero: 'masculino', edad: 3, dueño: 'Lucas' },
            { id: 6, nombre: 'Max',   especie: 'Gato',  raza: 'siames',         genero: 'masculino', edad: 2, dueño: 'gilma' }
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
                    <h2 className="mb-4"> Mascotas</h2>
                    <div className="d-flex gap-2 mt-2">

                    <Link to='/agregarmascota'><button className="btn btn-primary mb-4">Agregar Nueva Mascota</button></Link>
                    <Link to= '/administrador'><button className="btn btn-primary mb-4">Volver a Inicio</button></Link>

                    </div>
                    {/* Buscador de mascota */}
                    <div className="mb-3 d-flex gap-2">
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Buscar Mascota por ID" 
                            value={busqueda} 
                            onChange={(e) => setBusqueda(e.target.value)} 
                        />
                        <button className="btn btn-info" onClick={buscarMascota}>Buscar Mascota</button>
                    </div>
                    
                    {mascotaEncontrada && (
                        <div className="alert alert-success">
                            <h5>{mascotaEncontrada.nombre}</h5>
                            <p><strong>Id:</strong> {mascotaEncontrada.id}</p> 
                            <p><strong>Especie:</strong> {mascotaEncontrada.especie}</p>
                            <p><strong>Raza:</strong> {mascotaEncontrada.raza}</p>
                            <p><strong>Genero:</strong> {mascotaEncontrada.genero}</p>
                            <p><strong>Edad:</strong> {mascotaEncontrada.edad} años</p>
                            <p><strong>Propietario:</strong> {mascotaEncontrada.propietario}</p>
                        </div>
                    )}
                    <div className="row">
                        {Array.isArray(mascotas) && mascotas.length > 0 ? (
                            mascotas.map(mascota => (
                                <div key={mascota.id} className="col-md-12">
                                    <div className="card mb-4">
                                    <div className="card-body d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                        </div>
                                        <div className="d-flex flex-column gap-2">
                                            <h4 className="card-title">{mascota.nombre}</h4>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <p className="card-text"><strong>Id:</strong> {mascota.id}</p>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <p className="card-text"><strong>Especie:</strong> {mascota.especie}</p>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <p className="card-text"><strong>Raza:</strong> {mascota.raza}</p>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <p className="card-text"><strong>Genero:</strong> {mascota.genero}</p>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <p className="card-text"><strong>Edad:</strong> {mascota.edad} años</p>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <p className="card-text"><strong>Dueño:</strong> {mascota.dueño}</p>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <button className="btn btn-danger mt-2" onClick={() => eliminarMascota(mascota.id)}>Eliminar</button>
                                            <Link to='/vermascota'><button className="btn btn-primary mb-4">Ver mascota</button></Link>
                                        </div>
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
