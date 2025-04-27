import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const BACKEND_URL = "http://localhost:3001";

export default function Success() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const confirmPayment = async () => {
            const queryParams = await new URLSearchParams(window.location.search);
            const paymentId = await queryParams.get('payment_id');
            const status = await queryParams.get('status');

            if (!paymentId) {
                await Swal.fire('Error', 'No se recibió información de pago', 'error');
                return window.location.href = '/';
            }

            try {
                setIsLoading(true);
                const token = await localStorage.getItem('token');
                const decoded_token = await JSON.parse(atob(token.split('.')[1]));
                const userId = await decoded_token.id;
                // 1. Confirmar el pago con el backend
                const confirmResponse = await axios.post(`${BACKEND_URL}/api/compras/confirmar-pago/${userId}`, {
                    paymentId,
                    status,
                });

                // 2. Vaciar el carrito (si la confirmación fue exitosa)
                await axios.delete(`http://localhost:3001/api/carrito/eliminarCarrito/${userId}`);

                // 3. Mostrar confirmación al usuario
                if (confirmResponse.status === 200) {
                    await Swal.fire({
                        title: 'Pago confirmado',
                        text: 'Tu pago ha sido confirmado con exito.',
                        icon: 'success'
                    });
                    window.location.href = '/miscompras';
                }
            } catch (error) {
                console.error("Error en confirmación de pago:", error);
                await Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema confirmando tu pago. Por favor contacta a soporte.',
                    icon: 'error'
                });
                window.location.href = '/';
            } finally {
                setIsLoading(false);
            }
        };

        // Manejar la promesa correctamente
        confirmPayment().catch(error => {
            console.error("Error no manejado en confirmPayment:", error);
        });
    }, [userId]);

    return (
        <div className="container my-5 text-center">
            {isLoading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            ) : (
                <div>
                    <h1 className="fw-bold">¡Gracias por tu compra!</h1>
                    <p>Tu pago ha sido confirmado con exito.</p>
                </div>
            )}
        </div>
    );
}