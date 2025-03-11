import React, { useState } from "react";
import Navegacion from '../../components/Navegacion'
import Footer from '../../components/Footer'

function RegistrarMascota() {
    const [form, setForm] = useState({
        nombre: "",
        especie: "",
        raza: "",
        edad: "",
        sexo: "",
        propietario: "",
        imagen: null,
    });

    const [preview, setPreview] = useState(null); // Previsualización de la imagen

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm({ ...form, imagen: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result); // Cargar previsualización
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos de la mascota:", form);
        alert("¡Mascota registrada con éxito!");
        setForm({
            nombre: "",
            especie: "",
            raza: "",
            edad: "",
            sexo: "",
            propietario: "",
            imagen: null,
        });
        setPreview(null);
    };

    return (
        <div>
            <Navegacion />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header text-center bg-info text-white">
                                <h3 className="text-black">Registrar Nueva Mascota</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {/* Formulario */}
                                    <div className="col-md-8">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="nombre" className="form-label">
                                                    Nombre de la Mascota
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nombre"
                                                    name="nombre"
                                                    value={form.nombre}
                                                    onChange={handleChange}
                                                    placeholder="Ingrese el nombre de la mascota"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="especie" className="form-label">
                                                    Especie
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="especie"
                                                    name="especie"
                                                    value={form.especie}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Seleccione la especie
                                                    </option>
                                                    <option value="Perro">Perro</option>
                                                    <option value="Gato">Gato</option>
                                                    <option value="Ave">Ave</option>
                                                    <option value="Otro">Otro</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="raza" className="form-label">
                                                    Raza
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="raza"
                                                    name="raza"
                                                    value={form.raza}
                                                    onChange={handleChange}
                                                    placeholder="Ingrese la raza de la mascota"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="edad" className="form-label">
                                                    Edad
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="edad"
                                                    name="edad"
                                                    value={form.edad}
                                                    onChange={handleChange}
                                                    placeholder="Ingrese la edad en años"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Sexo</label>
                                                <div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="sexo"
                                                            id="macho"
                                                            value="Macho"
                                                            checked={form.sexo === "Macho"}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        <label className="form-check-label" htmlFor="macho">
                                                            Macho
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="sexo"
                                                            id="hembra"
                                                            value="Hembra"
                                                            checked={form.sexo === "Hembra"}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        <label className="form-check-label" htmlFor="hembra">
                                                            Hembra
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="propietario" className="form-label">
                                                    Nombre del Propietario
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="propietario"
                                                    name="propietario"
                                                    value={form.propietario}
                                                    onChange={handleChange}
                                                    placeholder="Ingrese el nombre del propietario"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="imagen" className="form-label">
                                                    Imagen de la Mascota
                                                </label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="imagen"
                                                    name="imagen"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                />
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-lg">
                                                    Registrar Mascota
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* Previsualización de la Imagen */}
                                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt="Previsualización de la mascota"
                                                className="img-fluid rounded-circle shadow"
                                                style={{ maxHeight: "300px", objectFit: "cover" }}
                                            />
                                        ) : (
                                            <p className="text-muted">No hay imagen seleccionada</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default RegistrarMascota;
