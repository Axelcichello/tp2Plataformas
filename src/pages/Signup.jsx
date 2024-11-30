// src/components/Signup.js
import React, { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const newUser = {
            email,
            password,
            esAdmin: false,
        };

        // Obtener la lista de usuarios del localStorage
        const users = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Agregar el nuevo usuario a la lista
        users.push(newUser);

        // Guardar la lista actualizada en el localStorage
        localStorage.setItem('usuarios', JSON.stringify(users));

        alert('Registrado con éxito');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Regístrate</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Introduce tu correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Introduce tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirma tu contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Registrarse
                    </button>
                </form>
                <p className="signup-link">
                    ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
