import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';

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
    const subtotal = 10000;
    const envio = 4900;
    const totalConDescuento = subtotal - subtotal * descuento;

    const [metodoEntrega, setMetodoEntrega] = useState('retiro');
    const [fechaRecogida, setFechaRecogida] = useState('');
    const [fotoResponsable, setFotoResponsable] = useState(null);
    const [preferenceId, setPreferenceId] = useState(null);

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

    const handleMetodoChange = (metodo) => setMetodoEntrega(metodo);
    const handleFechaChange = (e) => setFechaRecogida(e.target.value);

    const handleFotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setFotoResponsable(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const iniciarPago = async () => {
        const totalFinal = subtotal;
        try {
            const response = await fetch('http://localhost:3001/api/pedidos/crear-pago', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: `Orden - ${formData.nombre}`,
                    unit_price: totalFinal,
                }),
            });

            const data = await response.json();
            setPreferenceId(data.id);
        } catch (error) {
            console.error('Error al crear preferencia de pago:', error);
            alert('Hubo un problema al iniciar el pago.');
        }
    };

    useEffect(() => {
        if (preferenceId) {
            const script = document.createElement('script');
            script.src = "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js";
            script.setAttribute("data-preference-id", preferenceId);
            script.setAttribute("data-button-label", "Pagar ahora");
            script.setAttribute("data-header-color", "#007aff");

            const container = document.getElementById("wallet_container");
            if (container) {
                container.innerHTML = "";
                container.appendChild(script);
            }
        }
    }, [preferenceId]);

    return (
        <div className="container my-5 shadow p-5 rounded-5">
            <div className="row">
                <div className="col-md-8">
                    <h3>1. Datos personales</h3>
                    <form>
                        {/* Datos personales */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Tipo de Persona *</label>
                                <select className="form-select" name="tipoPersona" value={formData.tipoPersona} onChange={handleInputChange}>
                                    <option value="">Seleccione</option>
                                    <option value="natural">Persona Natural</option>
                                    <option value="juridica">Persona Jurídica</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Tipo de Documento *</label>
                                <select className="form-select" name="tipoDocumento" value={formData.tipoDocumento} onChange={handleInputChange}>
                                    <option value="">Seleccione</option>
                                    <option value="cc">Cédula de Ciudadanía</option>
                                    <option value="nit">NIT</option>
                                    <option value="ce">Cédula de Extranjería</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo *</label>
                            <input type="email" className="form-control" name="correo" value={formData.correo} onChange={handleInputChange} required />
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Nombre *</label>
                                <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Apellidos *</label>
                                <input type="text" className="form-control" name="apellidos" value={formData.apellidos} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Cédula *</label>
                                <input type="text" className="form-control" name="cedula" value={formData.cedula} onChange={handleInputChange} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Teléfono *</label>
                                <input type="text" className="form-control" name="telefono" value={formData.telefono} onChange={handleInputChange} required />
                            </div>
                        </div>
                    </form>

                    <h3>2. Método de entrega</h3>
                    <div className="d-flex justify-content-around my-3">
                        <button className={`btn ${metodoEntrega === 'retiro' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleMetodoChange('retiro')}>
                            Retirar en la tienda
                        </button>
                    </div>

                    {metodoEntrega === 'retiro' && (
                        <>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5>Selecciona tu punto de recogida</h5>
                                    <p><strong>Bogotá: Parque Colina</strong><br />Cra. 58d #146-51, Bogotá D.C.</p>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5>Programa tu recogida</h5>
                                    <input type="date" className="form-control" value={fechaRecogida} onChange={handleFechaChange} />
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5>Responsable de recoger</h5>
                                    <input type="file" accept="image/*" className="form-control mb-3" onChange={handleFotoChange} />
                                    {fotoResponsable && (
                                        <img src={fotoResponsable} alt="Responsable" className="img-thumbnail" style={{ maxWidth: '150px' }} />
                                    )}
                                </div>
                            </div>
                        </>
                    )}

                    <button type="button" className="btn btn-primary mt-3" onClick={iniciarPago}>
                        Ir al método de pago
                    </button>

                    <div id="wallet_container" className="my-4"></div>
                </div>

                <div className="col-md-4">
                    <h3>Resumen de tu orden</h3>
                    <div className="card mb-3">
                        <div className="card-body d-flex justify-content-between">
                            <span>Alimento Para Perro Equilibrio</span>
                            <span>$69.480</span>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5>¿Tienes un cupón?</h5>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Código" value={cupon} onChange={(e) => setCupon(e.target.value)} />
                                <button className="btn btn-primary" onClick={handleCupon}>Agregar</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5>Resumen de la compra</h5>
                            <div className="d-flex justify-content-between"><span>Subtotal</span><span>${subtotal.toLocaleString()}</span></div>
                            <div className="d-flex justify-content-between"><span>Envío</span><span>${envio.toLocaleString()}</span></div>
                            <div className="d-flex justify-content-between"><span>Total</span><span>${(totalConDescuento + envio).toLocaleString()}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
