import React from 'react'
import Footer from '../../components/Footer'
import Navegacion from '../../components/Navegacion'
import { Link } from 'react-router-dom'


export default function Productos() {
  return (
    <div>

        {/* Header */}
        <Navegacion />
        {/* <!-- Contenido principal --> */}
        <main className="py-4">
          <div className="container">
            <div className="row">
              {/* <!-- Filtros --> */}
              <aside className="col-md-3">
                <h5 className="mb-3">Tipo de Comida</h5>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="humedo" />
                  <label className="form-check-label" htmlFor="humedo">Húmedo</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="seco" />
                  <label className="form-check-label" htmlFor="seco">Seco</label>
                </div>


                <h5 className="mb-3">Especie</h5>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gato" />
                  <label className="form-check-label" htmlFor="gato">Gato</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="perro" />
                  <label className="form-check-label" htmlFor="perro">Perro</label>
                </div>


                <h5 className="mb-3">Etapa de Vida</h5>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="adulto" />
                  <label className="form-check-label" htmlFor="adulto">Adulto</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="adultos-mayores" />
                  <label className="form-check-label" htmlFor="adultos-mayores">Adultos mayores</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="cachorro" />
                  <label className="form-check-label" htmlFor="cachorro">Cachorro</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gatitos" />
                  <label className="form-check-label" htmlFor="gatitos">Gatitos</label>
                </div>
              </aside>

              {/* <!-- Productos --> */}
              <section className="col-md-9">
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="card">
                      <img src="src/img/Royal.jpg" className="card-img-top" alt="Producto 1" />
                      <div className="card-body">
                        <h6 className="card-title">Adultos Minis y Pequeños Pollo y Salmón</h6>
                        <p className="card-text text-muted">Alimento balanceado completo para perros adultos minis y pequeños...</p>
                        <Link to="/producto" className="btn btn-link">Ver más</Link> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="src/img/Royal.jpg" className="card-img-top" alt="Producto 2" />
                      <div className="card-body">
                        <h6 className="card-title">Purina One® Gatos Esterilizados</h6>
                        <p className="card-text text-muted">Alimento balanceado, completo, húmedo, para gatos adultos y...</p>
                        <Link to="/producto" className="btn btn-link">Ver más</Link> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="src/img/Royal.jpg" className="card-img-top" alt="Producto 3" />
                      <div className="card-body">
                        <h6 className="card-title">Multi Proteínas Salmón, Atún</h6>
                        <p className="card-text text-muted">Alimento balanceado, completo, húmedo, para gatos adultos y...</p>
                        <Link to="/producto" className="btn btn-link">Ver más</Link> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="src/img/Royal.jpg" className="card-img-top" alt="Producto 1" />
                      <div className="card-body">
                        <h6 className="card-title">Adultos Minis y Pequeños Pollo y Salmón</h6>
                        <p className="card-text text-muted">Alimento balanceado completo para perros adultos minis y pequeños...</p>
                        <Link to="/producto" className="btn btn-link">Ver más</Link> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="src/img/Royal.jpg" className="card-img-top" alt="Producto 2" />
                      <div className="card-body">
                        <h6 className="card-title">Purina One® Gatos Esterilizados</h6>
                        <p className="card-text text-muted">Alimento balanceado, completo, húmedo, para gatos adultos y...</p>
                        <Link to="/producto" className="btn btn-link">Ver más</Link> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="src/img/Royal.jpg" className="card-img-top" alt="Producto 3" />
                      <div className="card-body">
                        <h6 className="card-title">Multi Proteínas Salmón, Atún</h6>
                        <p className="card-text text-muted">Alimento balanceado, completo, húmedo, para gatos adultos y...</p>
                        <Link to="/producto" className="btn btn-link">Ver más</Link> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="src/img/Royal.jpg" className="card-img-top" alt="Producto 1" />
                      <div className="card-body">
                        <h6 className="card-title">Adultos Minis y Pequeños Pollo y Salmón</h6>
                        <p className="card-text text-muted">Alimento balanceado completo para perros adultos minis y pequeños...</p>
                        <Link to="/producto" className="btn btn-link">Ver más</Link> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="src/img/Royal.jpg" className="card-img-top" alt="Producto 2" />
                      <div className="card-body">
                        <h6 className="card-title">Purina One® Gatos Esterilizados</h6>
                        <p className="card-text text-muted">Alimento balanceado, completo, húmedo, para gatos adultos y...</p>
                        <Link to="/producto" className="btn btn-link">Ver más</Link> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="src/img/Royal.jpg" className="card-img-top" alt="Producto 3" />
                      <div className="card-body">
                        <h6 className="card-title">Multi Proteínas Salmón, Atún</h6>
                        <p className="card-text text-muted">Alimento balanceado, completo, húmedo, para gatos adultos y...</p>
                        <Link to="/producto" className="btn btn-link">Ver más</Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
    </div>
  )
}
