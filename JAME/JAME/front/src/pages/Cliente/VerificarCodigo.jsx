
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"

export default function VerificarCodigo() {
  const [codigo, setCodigo] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Obtener el email de los parámetros de la URL
  const searchParams = new URLSearchParams(location.search)
  const email = searchParams.get("email")

  useEffect(() => {
    if (!email) {
      navigate("/OlvidoContrasena")
    }
  }, [email, navigate])

  const manejarVerificacion = async (e) => {
    e.preventDefault()

    if (!codigo || codigo.length !== 6) {
      setMensaje("Por favor, ingresa el código de 6 dígitos completo.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/auth/verificarCodigo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, codigo }),
      })

      const data = await response.json()

      if (data.success) {
        // Redirigir a la página para establecer nueva contraseña
        navigate(`/nueva-contrasena?email=${email}&token=${data.token}`)
      } else {
        setMensaje(data.message || "Código incorrecto. Intenta nuevamente.")
      }
    } catch (error) {
      setMensaje("Hubo un error al verificar el código. Intenta nuevamente.")
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
                <p className="text-muted">Verificación de código</p>
              </div>
              <form onSubmit={manejarVerificacion}>
                <div className="mb-3">
                  <p>
                    Hemos enviado un código de verificación a <strong>{email}</strong>.
                  </p>
                  <label htmlFor="codigo" className="form-label">
                    Código de verificación
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="codigo"
                    placeholder="Ingresa el código de 6 dígitos"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    maxLength={6}
                    required
                  />
                </div>
                {mensaje && <div className="alert alert-info">{mensaje}</div>}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Verificando..." : "Verificar código"}
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={() => navigate(`/OlvidoContrasena`)}>
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
