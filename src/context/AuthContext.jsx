import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Inicializa con null si no hay usuario autenticado.

  // Cargar estado inicial desde LocalStorage
  useEffect(() => {
    const session = localStorage.getItem("isAuthenticated");
    if (session) {
      setIsAuthenticated(true);
    }
  }, []);

  // Función para iniciar sesión
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const userExists = users.find(
      (user) => user.correo === email && user.password === password
    );

    if (userExists) {
      // Guarda los datos del usuario autenticado
      setIsAuthenticated(userExists);

      // También guarda los datos en localStorage para persistencia
      localStorage.setItem("isAuthenticated", JSON.stringify(userExists));

      return true; // Login exitoso
    }
    return false; // Credenciales incorrectas
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
