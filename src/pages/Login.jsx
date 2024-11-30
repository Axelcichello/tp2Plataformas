import React, { useState } from "react";
import "../LoginForm.css"; // Archivo CSS para los estilos
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <Header />

      <div className="login-container">
        <div className="login-card">
          <h2>Iniciar Sesión</h2>
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