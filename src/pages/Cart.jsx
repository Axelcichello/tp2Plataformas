import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  const carrito = JSON.parse(localStorage.getItem("cart")) || [];

  const removeFromCart = (productId) => {
    // Filtrar el carrito para eliminar el producto por ID
    const updatedCart = carrito.filter((product) => product.id !== productId);

    // Actualizar el carrito en localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Re-renderizar el componente (esto solo sucederá cuando se recargue la página)
    window.location.reload();
  };

  return (
    <div>
      <Header />

      <main className="contenedor">
        <h1>Carrito de Compras</h1>

        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div className="contenedor">
            {carrito.map((product) => (
              <div key={product.id} className="producto-carrito">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  style={{ width: "50px", height: "auto", marginRight: "10px" }}
                />
                <span>{product.nombre}</span>
                <span>${product.precio}</span>
                <span>Talle: {product.talle}</span>
                <span>Cantidad: {product.cantidad}</span>
                <button
                  className="boton-rojo"
                  onClick={() => removeFromCart(product.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
