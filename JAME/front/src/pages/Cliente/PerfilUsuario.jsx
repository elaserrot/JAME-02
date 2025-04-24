import React, { useState, useEffect } from "react";
import Footer from '../../components/Footer';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const decodedToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
    const id = decodedToken ? decodedToken.id : null;

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/usuarios/perfil/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(response.data.usuario);
            } catch (error) {
                console.error("Error al obtener perfil:", error);
                alert("Hubo un error al obtener el perfil.");
                navigate('/login');
            }
        };
        fetchProfile();
    }, [navigate, token, id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewImage(file);
            setProfile((prev) => ({
                ...prev,
                imagen: URL.createObjectURL(file),
            }));
        }
    };

    const handleSave = async () => {
        try {
            const formData = new FormData();
            formData.append('nombre_completo', profile.nombre_completo);
            formData.append('usuario', profile.usuario);
            formData.append('telefono', profile.telefono);
            formData.append('direccion', profile.direccion);

            if (newImage) {
                formData.append('imagen', newImage);
            }

            await axios.put(`http://localhost:3001/api/usuarios/${profile.id_usuario}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setIsEditing(false);
            alert("Datos actualizados correctamente");
        } catch (error) {
            console.error("Error al actualizar:", error);
            alert("Hubo un error al actualizar los datos.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    if (!profile) return <div className="text-center mt-5">Cargando perfil...</div>;

    return (
        <div className="d-flex flex-column min-vh-100">
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
                        <div className="col-md-4 text-end">
                            <button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow-1">
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
                                            src={`http://localhost:3001/USUARIOS_FOTOS/${profile.imagen}`}
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
                                            <h6 className="mb-0">Nombre</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="nombre_completo"
                                                    value={profile.nombre_completo}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                profile.nombre_completo
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
                                            <h6 className="mb-0">Correo</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.correo_electronico}
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
                                                    name="telefono"
                                                    value={profile.telefono || ''}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                profile.telefono || 'No registrado'
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
                                                    value={profile.direccion || ''}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                profile.direccion || 'No registrada'
                                            )}
                                        </div>
                                    </div>
                                    {isEditing && (
                                        <button className="btn btn-success mt-3" onClick={handleSave}>
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

        </div>
    );
};

export default UserProfile;
