// src/pages/Success.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();

    useEffect(() => {
        alert("¡Pago exitoso!");
        // Redirige al inicio después de 3 segundos
        setTimeout(() => navigate("/"), 3000);
    }, []);

    return <div>¡Gracias por tu compra!</div>;
}