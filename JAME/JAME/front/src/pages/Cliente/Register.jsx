import React from 'react'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Register() {
  return (
    <div>
      <div className="vh-100 d-flex justify-content-center align-items-center " style={{
        backgroundImage: `url("https://hoylecohen.com/wp-content/uploads/login-page-bg.jpg")`
      }}>
        <div class="w-50 p-5">
          <div class="card shadow p-5 rounded-5">
            <div class=" text-dark text-center">
              <i className="display-2 fa fa-paw" aria-hidden="true"></i>

              <h2>Registro Clinica Veterinaria</h2>
              <h2>Ciudad Canina</h2>

            </div>
            <div class="card-body">
              <form>
                {/* <!-- Información del propietario --> */}
                <h4 class="mb-3 text-center">Información del cliente</h4>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="nombrePropietario" class="form-label">Usuario</label>
                    <input type="text" id="nombrePropietario" class="form-control" placeholder="Usuario" required />
                  </div>
                  <div class="col-md-6">
                    <label for="emailPropietario" class="form-label">Correo Electrónico</label>
                    <input type="email" id="emailPropietario" class="form-control" placeholder="Correo electrónico" required />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="Usuario" class="form-label">Contraseña</label>
                    <input type="tel" id="Usuario" class="form-control" placeholder="Contraseña" required />
                  </div>
                  <div class="col-md-6">
                    <label for="password" class="form-label">Confirmar Contraseña</label>
                    <input type="text" id="password" class="form-control" placeholder="Confirmar Contraseña" required />
                  </div>
                </div>
                {/*              {/* <!-- Botón de registro --> */}
                <div class="text-center">
                  <button type="submit" class="btn btn-success w-100" onClick={()=>{
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Usuario Registrado Correctante",
                      showConfirmButton: false,
                      timer: 1500,
                    }
                    ).then(() => {
                      window.location.href = "/login";
                    });
                    
                  }}>Registrarse</button>
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
