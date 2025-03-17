import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function AdminMascotas() {
    
    const [mascotas, setMascotas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [mascotaEncontrada, setMascotaEncontrada] = useState(null);
    const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

    useEffect(() => {
        // Simulación de carga de datos
        const data = [

            { id: 1, nombre: 'keyla',imagen: '/src/img/keyla.jpg', fecha: '16/10/2022',especie: 'Perro', raza: 'Bulldog french', genero: 'hembra', edad: 3, dueño: 'Alisson' },
            { id: 2, nombre: 'Napoleon',imagen: '/src/img/napoleon.jpg', fecha: '28/06/2023',especie: 'Perro', raza: 'Bulldog french', genero: 'macho', edad: 2, dueño: 'Juan' },
            { id: 3, nombre: 'Rocky',imagen: '/src/img/rocky.png',fecha: '10/02/2024', especie: 'Gato',  raza: 'leopardo',       genero: 'macho', edad: 1, dueño: 'Gilma' },
            { id: 4, nombre: 'Toby', imagen: '/src/img/toby.png',fecha: '6/08/2021', especie: 'Perro', raza: 'rotwailler',       genero: 'macho', edad: 4, dueño: 'Martin' },
            { id: 5, nombre: 'Jack',imagen: '/src/img/jack.png', fecha: '4/12/2022', especie: 'Gato',  raza: 'tigrillo',       genero: 'macho', edad: 3, dueño: 'Diego' },
            { id: 6, nombre: 'Max', imagen: '/src/img/max.jpg', fecha: '26/07/2023 ', especie: 'Gato',  raza: 'siames',         genero: 'macho', edad: 2, dueño: 'Carlos' }
              

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
                        <Link to='/ventas'><a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-cart me-2"></i> Ventas
                        </a>
                        </Link>
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
                            <p><strong>Dueño:</strong> {mascotaEncontrada.dueño}</p>
                        </div>
                    )}
                    {/* Lista de mascotas */}
                    <div className="row">
                        {mascotas.length > 0 ? (
                            mascotas.map(mascota => (
                                <div key={mascota.id} className="col-md-12">
                                    <div className="card mb-4">
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <h4 className="card-title">{mascota.nombre}</h4>
                                            <div className="d-flex gap-2 mt-2">
                                            <button className="btn btn-primary" onClick={() => setMascotaSeleccionada(mascota)}>Ver mascota</button>
                                            <button className="btn btn-danger" onClick={() => eliminarMascota(mascota.id)}>Eliminar</button>
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

                    {/* Modal para mostrar información de la mascota */}
                    <Modal show={mascotaSeleccionada !== null} onHide={() => setMascotaSeleccionada(null)}size="lg">
                        <Modal.Header closeButton className="bg-primary text-white">
                            <Modal.Title><h1>{mascotaSeleccionada?.nombre}</h1></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-5 d-flex gap-5">
                            <img 
                            src={mascotaSeleccionada?.imagen || "/src/img/dog_placeholder.png"} 
                            alt={mascotaSeleccionada?.nombre} 
                            className="img-fluid rounded"
                            style={{ height: "400px", objectFit: "cover"}}/>
                            
                                <div className="col-md-12">
                                    <p><b><strong>Fecha de nacimiento:</strong></b> {mascotaSeleccionada?.fecha}</p>
                                    <p><b><strong>Especie:</strong></b> {mascotaSeleccionada?.especie}</p>
                                    <p><b><strong>Raza:</strong></b> {mascotaSeleccionada?.raza}</p>
                                    <p><b><strong>Género:</strong></b> {mascotaSeleccionada?.genero}</p>
                                    <p><b><strong>Edad:</strong></b> {mascotaSeleccionada?.edad} años</p>
                                    <p><b><strong>Dueño:</strong></b> {mascotaSeleccionada?.dueño}</p>
                                    
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setMascotaSeleccionada(null)}>Cerrar</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        <Footer />
    </div>
);
}
