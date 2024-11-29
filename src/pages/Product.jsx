import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mochila6 from "../assets/images/mochila6.jpg";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams(); // Obtener el ID de la URL

  // Aquí podrías buscar los datos del producto en `localStorage` u otra fuente
  const productosGuardados =
    JSON.parse(localStorage.getItem("productos")) || [];
  const producto = productosGuardados.find((item) => item.id === parseInt(id));

  console.log(producto);

  return (
    <div>
      <Header />

      <main className="contenedor">
        <h1>{producto.nombre}</h1>
        <div className="descripcion">
          <img src={producto.imagen} alt={producto.nombre} />

          <div className="mochila-descripcion">
            <p>
              Mochila reforzada con 4 compartimientos para guardar útiles y
              objetos. Espacio especial para notebooks y teclado. Laterales para
              guardar botellas doblemente reforzados para evitar que se rompan.
              Peso liviano, económica y fácil de transportar.{" "}
              <strong>IMPERMEABLE</strong>.
            </p>

            <p>{producto.precio}</p>

            <form action="#" className="formulario">
              <select name="talle" id="talle">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>

              <input type="number" placeholder="cantidad" min="1" />

              <input type="submit" className="boton-amarillo" value="comprar" />
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
