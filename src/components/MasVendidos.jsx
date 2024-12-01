import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mochila1 from "../assets/images/mochila1.jpg";
import mochila2 from "../assets/images/mochila2.jpg";
import mochila3 from "../assets/images/mochila3.jpg";

const MasVendidos = () => {
  const [productosMasCaros, setProductosMasCaros] = useState([]);

  useEffect(() => {
    // Recupera los productos desde el localStorage
    const productos = JSON.parse(localStorage.getItem("productos")) || [];

    // Verifica que el array de productos no esté vacío
    if (productos.length > 0) {
      // Ordena los productos por el precio de forma descendente y toma los tres primeros
      const productosOrdenados = productos
        .sort((a, b) => b.precio - a.precio)
        .slice(0, 3);
      setProductosMasCaros(productosOrdenados);
    }
  }, []);


  return (
    <section className="contenedor">
      <h2 className="subtitulo">Modelos más vendidos</h2>

      <div className="contenedor-anuncios">
        {productosMasCaros.length > 0 ? (
          productosMasCaros.map((producto) => (
            <div className="anuncio" key={producto.id}>
              <img
                className="anuncio-foto"
                src={producto.imagen}
                alt={producto.nombre}
              />
              <div className="contenido-anuncio">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p className="precio">${producto.precio}</p>
                <Link to={`/Product/${producto.id}`} className="boton-amarillo">
                  Ver Producto
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>

      <div className="centrado">
        <Link to="/Gallery" className="boton-verde">
          Ver Todas
        </Link>
      </div>
    </section>
  );
};

export default MasVendidos;
