import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

    const AgregarMascota = () => {
        const [mascota, setMascota] = useState({
          nombre: "",
          especie: "",
          raza: "",
          edad: "",
          dueño: "",
        });
        const handleChange = (e) => {
            setMascota({ ...mascota, [e.target.name]: e.target.value });
          };
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Mascota agregada:", mascota);
            setMascota({ nombre: "", especie: "", raza: "", edad: "", dueño: "" }); // Resetea el formulario
            // Aquí puedes agregar la lógica para enviar los datos a la API o base de datos
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
        <Container className="mt-4 flex-grow-1">
          <Card>
            <Card.Header className="bg-primary text-white text-center">
              <h4>Agregar Nueva Mascota</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={mascota.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Especie</Form.Label>
                  <Form.Control
                    type="text"
                    name="especie"
                    value={mascota.especie}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Raza</Form.Label>
                  <Form.Control
                    type="text"
                    name="raza"
                    value={mascota.raza}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Edad</Form.Label>
                  <Form.Control
                    type="number"
                    name="edad"
                    value={mascota.edad}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Dueño</Form.Label>
                  <Form.Control
                    type="text"
                    name="dueño"
                    value={mascota.dueño}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  Agregar Mascota
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
        </div>
            <Footer />
        </div>
    );
};

export default AgregarMascota;
