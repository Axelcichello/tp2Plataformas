import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado inicial del usuario autenticado

  // Cargar estado inicial desde LocalStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Función para iniciar sesión
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const foundUser = users.find(
      (user) => user.correo === email && user.password === password
    );

    if (foundUser) {
      // Guarda los datos del usuario autenticado
      setUser(foundUser);

      // También guarda los datos en localStorage para persistencia
      localStorage.setItem("user", JSON.stringify(foundUser));

      return true; // Login exitoso
    }
    return false; // Credenciales incorrectas
  };

   // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};