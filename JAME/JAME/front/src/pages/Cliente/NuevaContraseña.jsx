
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import { useEffect } from "react"

export default function NuevaContrasena() {
  const [contrasena, setContrasena] = useState("")
  const [confirmarContrasena, setConfirmarContrasena] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Obtener el email y token de los parámetros de la URL
  const searchParams = new URLSearchParams(location.search)
  const email = searchParams.get("email")
  const token = searchParams.get("token")

  useEffect(() => {
    if (!email || !token) {
      navigate("/OlvidoContrasena")
    }
  }, [email, token, navigate])

  const manejarCambioContrasena = async (e) => {
    e.preventDefault()

    // Validar que las contraseñas coincidan
    if (contrasena !== confirmarContrasena) {
      setMensaje("Las contraseñas no coinciden.")
      return
    }

    // Validar requisitos de contraseña
    if (contrasena.length < 8) {
      setMensaje("La contraseña debe tener al menos 8 caracteres.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/auth/cambiarContrasena", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          token,
          nuevaContrasena: contrasena,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setMensaje("¡Contraseña actualizada correctamente!")
        // Redirigir al login después de 2 segundos
        setTimeout(() => {
          navigate("/login")
        }, 2000)
      } else {
        setMensaje(data.message || "Error al cambiar la contraseña. Intenta nuevamente.")
      }
    } catch (error) {
      setMensaje("Hubo un error al procesar la solicitud. Intenta nuevamente.")
    }

    setLoading(false)
  }

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
                    minLength={8}
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
                    minLength={8}
                  />
                </div>
                {mensaje && (
                <div className={`alert ${mensaje.includes("correctamente") ? "alert-success" : "alert-danger"}`}>
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
      <Footer />
    </div>
  )
}
