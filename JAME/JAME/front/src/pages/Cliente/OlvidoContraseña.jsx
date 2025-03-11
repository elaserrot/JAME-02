import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'


// Esta función genera un código aleatorio de 6 dígitos
const generarCodigo = () => {
    return Math.floor(100000 + Math.random() * 900000); // Número aleatorio de 6 dígitos
}

export default function OlvidoContraseña() {
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [loading, setLoading] = useState(false);

    // Función para manejar el envío del formulario
    const manejarEnvio = async (e) => {
        e.preventDefault();

        if (!email) {
            setMensaje('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Generar un código aleatorio
        const codigo = generarCodigo();

        setLoading(true);

        try {
            // Enviar el código al correo. Esta función debería llamarse a un servidor backend.
            // Ejemplo de cómo hacerlo:
            const response = await fetch('/api/enviarCodigo', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, codigo }),
            });

            const data = await response.json();

            if (data.success) {
                setMensaje('Te hemos enviado un correo con el código de recuperación.');
            } else {
                setMensaje('Hubo un problema al enviar el correo. Intenta nuevamente.');
            }
        } catch (error) {
            setMensaje('Hubo un error. Por favor, intenta nuevamente.');
        }

        setLoading(false);
    }

    return (
        <div className="">
            <div className="vh-100 d-flex justify-content-center align-items-center" style={{
                backgroundImage: `url("https://hoylecohen.com/wp-content/uploads/login-page-bg.jpg")`
            }}>
                <div className="w-50 p-5">
                    <div className="card shadow p-5 rounded-5">
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <i className="display-1 fa fa-paw" aria-hidden="true"></i>
                                <h2 className="card-title">Clinica Veterinaria Ciudad Canina</h2>
                                <p className="text-muted">¿Olvidaste la contraseña?</p>
                            </div>
                            <form onSubmit={manejarEnvio}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="nombre@ejemplo.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                {mensaje && <div className="alert alert-info">{mensaje}</div>}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Enviando...' : 'Enviar correo'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
