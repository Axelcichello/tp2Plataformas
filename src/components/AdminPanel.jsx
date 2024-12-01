import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AgregarProducto from "./AgregarProducto";
import AgregarUsuario from "./AgregarUsuario";

const AdminPanel = () => {
  return (
    <div>
      <Header />
      <main className="contenedor">
        <h1 className="titulo">Panel de Administrador</h1>

        {/* Sección para cargar mochilas */}
        <section className="formulario">
          <AgregarProducto /> {/* Agregamos el formulario de producto */}
        </section>

        {/* Sección para agregar usuarios */}
        <section className="formulario">
          <h2 className="subtitulo">Agregar Nuevo Usuario</h2>
          <AgregarUsuario /> {/* Aquí se coloca el formulario de agregar usuario */}
          {/* Formulario de usuario */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanel;
