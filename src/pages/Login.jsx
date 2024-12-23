import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../LoginForm.css"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import usuarios from "../assets/js/usuarios";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usuariosGuardados = localStorage.getItem("usuarios");

  if (!usuariosGuardados) {
    // Convertir a JSON y guardar en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!login(email, password)) {
      console.log("Credenciales incorrectas");
    } else {
      console.log("Credenciales correctas");
      console.log(user);
      if (user && user.rol === 1) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div>
      <Header />

      <div className="login-container">
        <div className="login-card">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
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
            <button type="submit" className="login-button">
              Iniciar Sesión
            </button>
          </form>
          <p className="signup-link">
            ¿No tienes una cuenta? <a href="/signup">Regístrate aquí</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginForm;