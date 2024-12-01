import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const UsuariosTabla = () => {
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const usuariosGuardados = localStorage.getItem("usuarios");
        if (usuariosGuardados) {
            setUsuarios(JSON.parse(usuariosGuardados));
        }
    }, []);

    const eliminarUsuario = (id) => {
        const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
        setUsuarios(nuevosUsuarios);
        localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
    };

    const modificarUsuario = (id) => {
        navigate(`/modificar-usuario/${id}`);
    };

    return (
        <div>
            <Header />
            <main className="contenedor">
                <h2 className="subtitulo">Lista de Usuarios</h2>
                <table className="tabla-usuarios container">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Correo</th>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.rol}</td>
                                <td>
                                    <button
                                        onClick={() => modificarUsuario(usuario.id)}
                                        className="boton-am"
                                    >
                                        Modificar
                                    </button>
                                    <button
                                        onClick={() => eliminarUsuario(usuario.id)}
                                        className="boton-rojo"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    onClick={() => navigate("/agregar-usuario")}
                    className="boton-verde"
                >
                    Agregar Usuario
                </button>
            </main>
            <Footer />
        </div>
    );
};

export default UsuariosTabla;
