import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const BACKEND_URL = "http://localhost:3001";

export default function Success() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const decoded_token = JSON.parse(atob(token.split('.')[1]));
    const userId = decoded_token.id;

    useEffect(() => {
        const confirmPayment = async () => {
            const queryParams = new URLSearchParams(window.location.search);
            const paymentId = queryParams.get('payment_id');
            const status = queryParams.get('status');

            if (!paymentId) {
                Swal.fire('Error', 'No se recibió información de pago', 'error');
                return navigate('/');
            }

            try {
                // 1. Confirmar el pago con el backend
                const confirmResponse = await axios.post(`${BACKEND_URL}/api/compras/confirmar-pago`, {
                    paymentId,
                    status
                });

                // 2. Vaciar el carrito (si la confirmación fue exitosa)
                await axios.delete(`http://localhost:3001/api/carrito/eliminarCarrito/${userId}`);

                // 3. Mostrar confirmación al usuario
                Swal.fire({
                    title: '¡Pago exitoso!',
                    text: `Tu pago con ID ${paymentId} ha sido procesado correctamente.`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    navigate('/mis-ordenes'); // Redirigir a página de órdenes
                });

            } catch (error) {
                console.error("Error en confirmación de pago:", error);
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema confirmando tu pago. Por favor contacta a soporte.',
                    icon: 'error'
                }).then(() => {
                    navigate('/');
                });
            }
        };

        confirmPayment();
    }, [navigate, userId]);

    return (
        <div className="container my-5 text-center">
            <h2>Procesando tu pago...</h2>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    );
}