import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ConfiguracionAdmin() {
    const [adminData, setAdminData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        ciudad: '',
        pais: '',
        direccion: '',
        codigoPostal: '',
        facebook: ''
    });

    const imagenPorDefecto = "/src/img/default-profile.png"; // Imagen por defecto
    const [imagenPerfil, setImagenPerfil] = useState(imagenPorDefecto);

 
    

    const handleChange = (e) => {
        setAdminData({ ...adminData, [e.target.name]: e.target.value });
    };

    const handleActualizar = () => {
        alert("Datos actualizados correctamente.");
    };

    const handleBorrar = () => {
        const confirmacion = window.confirm("¿Estás seguro de que deseas borrar los datos?");
        if (confirmacion) {
            setAdminData({
                nombre: '',
                telefono: '',
                correo: '',
                ciudad: '',
                pais: '',
                direccion: '',
                codigoPostal: '',
                facebook: ''
            });
            setImagenPerfil(imagenPorDefecto); // Restablecer imagen por defecto
            alert("Datos borrados correctamente.");
            window.location.reload(); // Recarga la página
        }
    };

  

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagenPerfil(reader.result); // Cargar imagen nueva
            };
            reader.readAsDataURL(file);
        }
    };

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
                        <a href="/agendamiento" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-calendar2 me-2"></i> Agendamientos
                        </a>
                        <a href="pedidos" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-box me-2"></i> Pedidos
                        </a>
                        <a href="reportes" className="list-group-item list-group-item-action bg-dark text-white py-3">
                            <i className="bi bi-bar-chart-line"></i> Reportes
                        </a>
                        <a href="/configuracion" className="list-group-item list-group-item-action bg-success text-white py-3 mt-auto">
                            <i className="bi bi-gear me-2"></i> Configuración
                        </a>
                    </div>
                </div>
                
                <div className="flex-grow-1 d-flex flex-column align-items-center p-4 bg-light">
                <div className="card p-4 w-70 bg-primary text-white">

                        <div className="d-flex">
                            {/* Imagen de perfil */}
                            <div className="me-4 text-center">
                                <img src={imagenPerfil} alt="Perfil" className="rounded" style={{ height: "300px", objectFit: "cover" }} />
                                <Form.Group className="mt-2">
                                    <Form.Label className="btn btn-outline-light w-100">
                                        Cambiar Imagen
                                        <input type="file" accept="image/*" onChange={handleImagenChange} style={{ display: 'none' }} />
                                    </Form.Label>
                                </Form.Group>
                                <div className="d-flex flex-column align-items-center mt-3">
                                    <Button variant="success"
                                        size="sm"
                                        className="my-2 p-1 fs-6"
                                        style={{ width: "150px" }}
                                        onClick={handleActualizar}>
                                        Actualizar
                                    </Button>
                                    <Button variant="danger"
                                        size="sm"
                                        className="my-2 p-1 fs-6"
                                        style={{ width: "150px" }}
                                        onClick={handleBorrar}>
                                        Borrar información
                                    </Button>
                                </div>
                            </div>

                            {/* Formulario */}
                        
                                <Form>
                                    <div className="row ">
                                        {/* Primera columna */}
                                        <div className="col-md-6 ">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Administrador</Form.Label>
                                                <Form.Control type="text" name="nombre" value={adminData.nombre} onChange={handleChange} className="w-100" />
                                            </Form.Group>
                                            <Form.Group className="mb-3 ">
                                                <Form.Label>Correo Electrónico</Form.Label>
                                                <Form.Control type="email" name="correo" value={adminData.correo} onChange={handleChange} className="w-100" />
                                            </Form.Group>
                                            <Form.Group className="mb-3 ">
                                                <Form.Label>Ciudad</Form.Label>
                                                <Form.Control type="text" name="ciudad" value={adminData.ciudad} onChange={handleChange} className="w-100" />
                                            </Form.Group>
                                            
                                        </div>
                                        {/* Segunda columna */}
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Número Telefónico</Form.Label>
                                                <Form.Control type="number" name="telefono" value={adminData.telefono} onChange={handleChange} className="w-100" />
                                            </Form.Group>
                                            <Form.Group className="mb-3 ">
                                                <Form.Label>País</Form.Label>
                                                <Form.Control type="text" name="pais" value={adminData.pais} onChange={handleChange} className="w-100" />
                                            </Form.Group>
                                            <Form.Group className="mb-3 ">
                                                <Form.Label>Dirección</Form.Label>
                                                <Form.Control type="text" name="direccion" value={adminData.direccion} onChange={handleChange} className="w-100" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}