import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Gallery = () => {
  //estado para almacenar los productos
  const [productos, setProductos] = useState([]);

  //cargar los datos del localstorage
  useEffect(() => {
    const productosGuardados = localStorage.getItem("productos");
    if (productosGuardados) {
      setProductos(JSON.parse(productosGuardados));
    }
  }, []);

  return (
    <div>
      <Header />

      <main className="contenido">
        <h1>Nuestros Productos</h1>

        <div className="galeria">
          {productos.length > 0 ? (
            productos.map((producto) => (
              <div className="producto" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="info-producto">
                  <p className="producto-nombre">{producto.nombre}</p>
                  <p className="producto-precio">${producto.precio}</p>

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
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
