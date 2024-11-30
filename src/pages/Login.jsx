import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginForm.css'; // Archivo CSS para los estilos

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener la lista de usuarios del localStorage
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar el usuario que coincida con el email y la contraseña
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      if (user.esAdmin) {
        navigate('/admin');
      } else {
        navigate('/gallery'); // Redirige a la página de inicio o la página de usuario
      }
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
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
  );
};

export default LoginForm;
