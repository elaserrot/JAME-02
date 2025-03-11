import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'


export default function Checkout() {
    const [formData, setFormData] = useState({
        tipoPersona: '',
        tipoDocumento: '',
        correo: '',
        nombre: '',
        apellidos: '',
        cedula: '',
        telefono: '',
    });

    const [cupon, setCupon] = useState('');
    const [descuento, setDescuento] = useState(0.1); // 10% de descuento
    const subtotal = 77200;
    const envio = 4900;

    const totalConDescuento = subtotal - subtotal * descuento;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCupon = () => {
        alert('Cupón aplicado con éxito!');
    };

    // Método de entrega
    const [metodoEntrega, setMetodoEntrega] = useState('retiro'); // Solo "retiro"
    const [fechaRecogida, setFechaRecogida] = useState('');
    const [fotoResponsable, setFotoResponsable] = useState(null);

    const handleMetodoChange = (metodo) => {
        setMetodoEntrega(metodo);
    };

    const handleFechaChange = (e) => {
        setFechaRecogida(e.target.value);
    };

    const handleFotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFotoResponsable(reader.result); // Imagen en formato base64
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="bg-primary text-dark py-2 text-center bg-info">
                <p className="mb-0">La mejor opción para el cuidado de tu mascota</p>
            </div>
            <div className="container ">
                <div className="row align-items-center">
                    <div className="col-md-4 d-flex align-items-center">
                        <img src="/src/img/logovet.png" alt="Logo Veterinaria" className="w-25 rounded-circle me-5" />
                    </div>
                    <div className="col-md-5 text-center">
                        <h1>Veterinaria Ciudad Canina</h1>
                    </div>
                </div>
            </div>
            <div className="container my-5 shadow p-5 rounded-5     ">
                <div className="row">
                    <div className="col-md-8">
                        <h3>1. Datos personales</h3>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Tipo de Persona *</label>
                                    <select
                                        className="form-select"
                                        name="tipoPersona"
                                        value={formData.tipoPersona}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Seleccione el tipo de Persona</option>
                                        <option value="natural">Persona Natural</option>
                                        <option value="juridica">Persona Jurídica</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Tipo de Documento *</label>
                                    <select
                                        className="form-select"
                                        name="tipoDocumento"
                                        value={formData.tipoDocumento}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Seleccione el tipo de documento</option>
                                        <option value="cc">Cédula de Ciudadanía</option>
                                        <option value="nit">NIT</option>
                                        <option value="ce">Cédula de Extranjería</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo *</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Nombre *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Apellidos *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apellidos"
                                        value={formData.apellidos}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Cédula de Ciudadanía *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cedula"
                                        value={formData.cedula}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Teléfono Celular *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </form>

                        <h3>2. Método de entrega</h3>
                        <div className="d-flex justify-content-around my-3">
                            <button
                                className={`btn ${metodoEntrega === 'retiro' ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => handleMetodoChange('retiro')}
                            >
                                Retirar en la tienda
                            </button>
                        </div>

                        {metodoEntrega === 'retiro' && (
                            <div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5>Selecciona tu punto de recogida</h5>
                                        <p>
                                            <strong>Bogotá: Parque Colina</strong>
                                            <br />
                                            Cra. 58d #146-51, 146-51
                                            <br />
                                            Bogotá, D.C.
                                        </p>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5>Programa tu recogida</h5>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={fechaRecogida}
                                            onChange={handleFechaChange}
                                        />
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5>Responsable de recoger</h5>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="form-control mb-3"
                                            onChange={handleFotoChange}
                                        />
                                        {fotoResponsable && (
                                            <div>
                                                <p>Foto seleccionada:</p>
                                                <img
                                                    src={fotoResponsable}
                                                    alt="Responsable"
                                                    className="img-thumbnail"
                                                    style={{ maxWidth: '150px' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        <button type="button" className="btn btn-primary mt-3">
                            Ir al método de pago
                        </button>
                    </div>

                    <div className="col-md-4">
                        <h3>Resumen de tu orden</h3>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <span>Alimento Para Perro Equilibrio</span>
                                    <span>$69.480</span>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5>¿Tienes un cupón?</h5>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Código"
                                        value={cupon}
                                        onChange={(e) => setCupon(e.target.value)}
                                    />
                                    <button className="btn btn-primary" onClick={handleCupon}>
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5>Resumen de la compra</h5>
                                <div className="d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toLocaleString()}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Envío</span>
                                    <span>${envio.toLocaleString()}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Total</span>
                                    <span>${(totalConDescuento + envio).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
