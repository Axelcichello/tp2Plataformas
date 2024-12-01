import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import agregarProductoImg from "../assets/images/agregar-producto.png";
import agregarUsuarioImg from "../assets/images/agregar-usuario.png";
import ModificarProducto from "./ModificarProduto";

import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const AdminPanel = () => {
  const navigate = useNavigate(); // Hook de navegación

  return (
    <div>
      <Header />
      <main className="contenedor">
        <h1 className="titulo">Panel de Administrador</h1>

        <div className="cartas-container">
          {/* Carta para Cargar Mochilas */}
          <div className="carta">
            <img src={agregarProductoImg} alt="Agregar Producto" className="imagen-carta" />
            <h2 className="subtitulo">Ver Mochilas</h2>
            <button className="boton-amarillo" onClick={() => navigate("/productostabla")}>
              Ver Mochilas
            </button>
          </div>

          {/* Carta para Agregar Usuario */}
          <div className="carta">
            <img src={agregarUsuarioImg} alt="Agregar Usuario" className="imagen-carta" />
            <h2 className="subtitulo">Agregar Usuario</h2>
            <button className="boton-amarillo" onClick={() => navigate("/agregar-usuario")}>
              Ir a Agregar Usuario
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanel;
