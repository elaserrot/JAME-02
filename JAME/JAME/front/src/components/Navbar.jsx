import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
           

            <header className="bg-white border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4 d-flex align-items-center">
                                <Link to={"/administrador"}><img src="/src/img/logovet.png" alt="Logo Veterinaria" className=" w-50 rounded-circle me-5" /></Link>
                                <div className="input-group">
                                </div>
                            </div>
                            <div className="col-md-5 text-center">
                                <h1>Veterinaria Ciudad Canina</h1>
                            </div>
                            <div className="col-md-3 text-end">
                                <i class="bi bi-person"></i>
                                <Link to={"/login"} className="text-decoration-none text-secondary me-3">INGRESAR</Link>
                            </div>
                        </div>
                    </div>
                <div className="text-center">
                </div>
            </header>
        </div>
    )
}
