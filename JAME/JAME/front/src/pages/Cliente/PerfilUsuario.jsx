import React, { useState } from "react";
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "María García",
        email: "maria.garcia@ejemplo.com",
        phone: "+34 612 345 678",
        contraseña: "123456789",
        usuario: "maria.garcia",
        direccion: "Calle Principal 123",
        about: "Dueña orgullosa de Max, un labrador de 3 años. Cliente regular de la clínica veterinaria desde 2020.",
        profileImage: "/src/img/logovet.png",
        memberSince: "Enero 2023",
    });
    const [newImage, setNewImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewImage(reader.result); // Convertimos la imagen a base64 para previsualizar
                setProfile((prevProfile) => ({
                    ...prevProfile,
                    profileImage: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setIsEditing(false);
        console.log("Datos actualizados:", profile);
        // Aquí puedes agregar lógica para enviar los datos actualizados a un backend.
    };

    return (
        <div>
            <div className="bg-primary text-dark py-2 text-center bg-info">
                <p className="mb-0">La mejor opción para el cuidado de tu mascota</p>
            </div>

            <header className="bg-white py-3 border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 d-flex align-items-center">
                            <img
                                src="/src/img/logovet.png"
                                alt="Logo Veterinaria"
                                className="w-25 rounded-circle me-5"
                            />
                        </div>
                        <div className="col-md-4 text-center">
                            <h1>Veterinaria Ciudad Canina</h1>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Detalles del Perfil</h5>
                                    <button
                                        className="btn btn-primary btn-sm float-end"
                                        onClick={() => setIsEditing(!isEditing)}
                                    >
                                        {isEditing ? "Cancelar" : "Editar"}
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="text-center mb-4">
                                        <img
                                            src={profile.profileImage}
                                            className="rounded-circle mb-3"
                                            alt="Foto de perfil"
                                            width="150"
                                            height="150"
                                        />
                                        {isEditing && (
                                            <div>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <hr />
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Usuario desde</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.memberSince}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Nombre</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    value={profile.name}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                profile.name
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Usuario</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="usuario"
                                                    value={profile.usuario}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                profile.usuario
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Contraseña</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {isEditing ? (
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="contraseña"
                                                    value={profile.contraseña}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                "********"
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {isEditing ? (
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={profile.email}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                profile.email
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Teléfono</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    value={profile.phone}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                profile.phone
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Dirección</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="direccion"
                                                    value={profile.direccion}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                profile.direccion
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Sobre mí</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {isEditing ? (
                                                <textarea
                                                    className="form-control"
                                                    name="about"
                                                    rows="3"
                                                    value={profile.about}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                profile.about
                                            )}
                                        </div>
                                    </div>
                                    {isEditing && (
                                        <button className="btn btn-success" onClick={handleSave}>
                                            Guardar Cambios
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Mis Mascotas</h5>
                                </div>
                                <div className="card-body">
                                    <p className="text-muted">No hay mascotas registradas todavía.</p>
                                    <Link to="/mascota" className="btn btn-primary">Agregar Mascota</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
        
    );
};

export default UserProfile;
