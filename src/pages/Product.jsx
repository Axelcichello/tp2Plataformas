import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams(); // Obtener el ID de la URL

  // Aquí podrías buscar los datos del producto en `localStorage` u otra fuente
  const productosGuardados =
    JSON.parse(localStorage.getItem("productos")) || [];
  const producto = productosGuardados.find((item) => item.id === parseInt(id));

  const addToCart = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe y recargue la página

    const quantity = parseInt(e.target.cantidad.value); // Obtener la cantidad seleccionada

    if (!quantity || quantity <= 0) {
      alert("Por favor, ingresa una cantidad válida.");
      return;
    }

    // Obtener el carrito actual desde localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Crear un objeto de producto con la información seleccionada
    const newProduct = {
      ...producto,
      cantidad: quantity,
    };

    // Añadir el producto al carrito
    const updatedCart = [...cart, newProduct];

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${producto.nombre} ha sido añadido al carrito.`);
  };

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <Header />

      <main className="contenedor">
        <h1>{producto.nombre}</h1>
        <div className="descripcion">
          <img src={producto.imagen} alt={producto.nombre} />

          <div className="mochila-descripcion">
            <p>{producto.descripcion}</p>

            <p>${producto.precio}</p>

            <form action="#" className="formulario" onSubmit={addToCart}>
              

              <input
                type="number"
                id="cantidad"
                name="cantidad"
                placeholder="cantidad"
                min="1"
              />

              <input
                type="submit"
                className="boton-amarillo"
                value="Añadir al carro"
              />
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
