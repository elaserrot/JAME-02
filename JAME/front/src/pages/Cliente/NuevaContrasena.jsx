
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import axios from "axios";

export default function NuevaContrasena() {
  const [contrasena, setContrasena] = useState("")
  const [confirmarContrasena, setConfirmarContrasena] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = new URLSearchParams(location.search)
  const email = searchParams.get("email")
  const token = searchParams.get("token")

  useEffect(() => {
    if (!email || !token) {
      navigate("/OlvidoContrasena")
    }
  }, [email, token, navigate])

  useEffect(() => {
    if (mensaje) setMensaje("");
  }, [contrasena, confirmarContrasena]);

  const manejarCambioContrasena = async (e) => {
    e.preventDefault();

    setMensaje("");

    console.log("Contrasena:", contrasena);
    console.log("Longitud:", contrasena.length);
    console.log("Confirmar:", confirmarContrasena);
    console.log("Iguales:", contrasena === confirmarContrasena);


    if (contrasena.trim().length <= 8 || confirmarContrasena.trim().length <= 8) {
      setMensaje("La nueva contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (contrasena !== confirmarContrasena) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/api/auth/cambiarContrasena", {
        email,
        token,
        contrasena,
      });

      const data = response.data;

      if (data.success) {
        setMensaje("¡Contraseña actualizada correctamente!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMensaje(data.message || "Error al cambiar la contraseña.");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Su tiempo de cambio de contraseña ha expirado. Intenta nuevamente.");
    }

    setLoading(false);
  };


  return (
    <div className="">
      <div
        className="vh-100 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url("https://hoylecohen.com/wp-content/uploads/login-page-bg.jpg")`,
        }}
      >
        <div className="w-50 p-5">
          <div className="card shadow p-5 rounded-5">
            <div className="card-body">
              <div className="text-center mb-4">
                <i className="display-1 fa fa-paw" aria-hidden="true"></i>
                <h2 className="card-title">Clinica Veterinaria Ciudad Canina</h2>
                <p className="text-muted">Establece tu nueva contraseña</p>
              </div>
              <form onSubmit={manejarCambioContrasena}>
                <div className="mb-3">
                  <label htmlFor="contrasena" className="form-label">
                    Nueva contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="contrasena"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmarContrasena" className="form-label">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmarContrasena"
                    value={confirmarContrasena}
                    onChange={(e) => setConfirmarContrasena(e.target.value)}
                    required
                  />
                </div>
                {mensaje && (
                  <div
                    className={`alert ${mensaje.includes("correctamente") ? "alert-success" : "alert-danger"
                      }`}
                  >
                    {mensaje}
                  </div>
                )}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Actualizando..." : "Actualizar contraseña"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
