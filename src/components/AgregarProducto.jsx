import React, { useState } from "react";

const AgregarProducto = () => {
  // Estado para manejar los campos del formulario
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo producto
    const nuevoProducto = {
      id: new Date().getTime(), // Generar un ID único basado en la fecha
      nombre,
      precio,
      imagen,
      descripcion,
    };

    // Obtener los productos existentes del LocalStorage
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    
    // Agregar el nuevo producto
    productosGuardados.push(nuevoProducto);
    
    // Guardar los productos actualizados en el LocalStorage
    localStorage.setItem("productos", JSON.stringify(productosGuardados));

    // Limpiar los campos del formulario
    setNombre("");
    setPrecio("");
    setImagen("");
    setDescripcion("");
  };

  return (
    <div>
      <h2 className="subtitulo">Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="formulario agregar-producto">
        <label htmlFor="nombre">Nombre del Producto</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          id="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />

        <label htmlFor="imagen">URL de Imagen</label>
        <input
          type="text"
          id="imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
        />

        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="boton-amarillo">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;