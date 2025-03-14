
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function AdminClientes() {
    
    const [clientes, setClientes] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [clienteEncontrada, setClienteEncontrada] = useState(null);

    useEffect(() => {
        // Simulación de carga de datos
        const data = [
            {  id: 1, nombre: 'Alisson', documento: 1025532382, telefono:3214138943 },
            {  id: 2, nombre: 'Juan', documento: 1589634527 , telefono:26357894560},
            {  id: 3, nombre: 'Gilma', documento: 1563289612, telefono: 3130456982},
            {  id: 4, nombre: 'Martin', documento: 1896423584, telefono:313895672365 },
            {  id: 5, nombre: 'Diego', documento: 1089532475, telefono:1523048965 },
           
          
        ];
        console.log("Cargando clientes:", data);
        setClientes(data);
    }, []);
    const eliminarCliente = (id) => {
        setClientes(clientes.filter(cliente => cliente.id !== id));
    };
    const buscarCliente = () => {
        const cliente = clientes.find(c => c.id === parseInt(busqueda));
        setClienteEncontrada(cliente);
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
                    <h2 className="mb-4"> Clientes</h2>
                    <div className="d-flex gap-2 mt-2">
                    <Link to='/agregar'><button className="btn btn-primary mb-4">Agregar Nuevo Cliente</button></Link>
                    <Link to='/administrador'><button className="btn btn-primary mb-4">Volver a Inicio</button></Link>
                    </div>
                    {/* Buscador de cliente */}
                    <div className="mb-3 d-flex gap-2">
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Buscar cliente por ID" 
                            value={busqueda} 
                            onChange={(e) => setBusqueda(e.target.value)} 
                        />
                        <button className="btn btn-info" onClick={buscarCliente}>Buscar Cliente</button>
                    </div>
                    
                    {clienteEncontrada && (
                        <div className="alert alert-success">
                            <h5>{clienteEncontrada.nombre}</h5>
                            <p><strong>Id:</strong> {clienteEncontrada.id}</p> 
                            <p><strong>documento:</strong> {clienteEncontrada.documento}</p>
                            <p><strong>telefono:</strong> {clienteEncontrada.telefono}</p>                        
                        </div>
                    )}
                    <div className="row">
                        {Array.isArray(clientes) && clientes.length > 0 ? (
                            clientes.map(cliente => (
                                <div key={cliente.id} className="col-md-12">
                                    <div className="card mb-4">
                                    <div className="card-body d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                        </div>
                                        <div className="d-flex flex-column gap-2">
                                            <h4 className="card-title">{cliente.nombre}</h4>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <p className="card-text"><strong>Id:</strong> {cliente.id}</p>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <p className="card-text"><strong>documento:</strong> {cliente.documento}</p>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                            <p className="card-text"><strong>telefono:</strong> {cliente.telefono}</p>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                             <button className="btn btn-danger mt-2" onClick={() => eliminarCliente(cliente.id)}>Eliminar</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No hay clientes registrados</p>
                            </div>
                        )}
                        
                    </div>
                </div>
        </div>
            <Footer />
        </div>
    );
}
