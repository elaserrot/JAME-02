import React from 'react';
import { Link } from 'react-router-dom';
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

                <div className="bg-dark text-white p-0 d-flex flex-column" style={{ width: '200px' }}>
                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-house me-2"></i> Inicio
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-cart me-2"></i> Ventas
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-calendar2 me-2"></i> Agendamientos
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-warning text-white py-3">
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
                    <div className="container bg-white p-4 rounded shadow">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <img src="/src/img/dog_placeholder.png" alt="Mascota" className="img-fluid rounded mb-2" />
                                <h3>KEYLA</h3>
                                <p>Número de historial: 1521</p>
                                <div className="d-flex gap-2 mt-2">
                                <button className="btn btn-success btn-sm mb-2">Subir foto</button>
                                </div>
                                <div className="d-flex gap-2 mt-2">
                                <button className="btn btn-primary btn-sm mb-2">Tomar Foto</button>
                                </div>
                                <div className="d-flex gap-2 mt-2">
                                <button className="btn btn-warning btn-sm mb-2">Cambiar foto</button>
                                </div>
                                <div className="d-flex gap-2 mt-2">
                                <button className="btn btn-danger btn-sm">Eliminar foto</button>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label>Dueño</label>
                                        <input type="text" className="form-control" value="Alison Daniela Torres" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label>Nombre</label>
                                        <input type="text" className="form-control" value="KEYLA" />
                                    </div>
                                <div className="col-md-6">
                                        <label>Fecha de nacimiento</label>
                                        <input type="text" className="form-control" value="16/10/2022" />
                                    </div>
                                <div className="col-md-6">
                                        <label>Especie</label>
                                        <input type="text" className="form-control" value="Perro" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Raza</label>
                                        <input type="text" className="form-control" value="Bulldog French" />
                                    </div>
                                <div className="col-md-6">
                                        <label>Sexo</label>
                                        <input type="text" className="form-control" value="Hembra" />
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <label>Entero o Castrado</label>
                                        <input type="text" className="form-control" value="Virgen" />
                                    </div>
                                <div className="mb-3">
                                    <label>Observaciones</label>
                                    <textarea className="form-control">xxxxxxxxxx</textarea>
                                </div>
                                </div>
                                
                                
                                <button className="btn btn-secondary me-2" type='submit'>Limpiar registro</button>
                                <button className="btn btn-success">Guardar Cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="flex-grow-1 bg-light p-4">
                   
                </div>
            </div>

            <Footer />
        </div>
    );
}