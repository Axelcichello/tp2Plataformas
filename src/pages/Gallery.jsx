import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallery = () => {
  const productos = [
    {
      id: 1,
      nombre: "Mochila Escolar P/ Universidad",
      precio: "$6300",
      imagen: "src/assets/images/mochila1.jpg",
      enlace: "producto.html",
    },
    {
      id: 2,
      nombre: "Mochila Escolar Doble Cierre",
      precio: "$6200",
      imagen: "src/assets/images/mochila2.jpg",
      enlace: "producto.html",
    },
    {
      id: 3,
      nombre: "Mochila Anti Robo Talle Unico",
      precio: "$8500",
      imagen: "src/assets/images/mochila3.jpg",
      enlace: "producto.html",
    },
    {
      id: 4,
      nombre: "Mochila Everlast Deportiva",
      precio: "$5500",
      imagen: "src/assets/images/mochila4.jpg",
      enlace: "producto.html",
    },
    {
      id: 5,
      nombre: "Mochila Básica",
      precio: "$3900",
      imagen: "src/assets/images/mochila5.jpg",
      enlace: "producto.html",
    },
    {
      id: 6,
      nombre: "Mochila Porta Notebook XL",
      precio: "$8000",
      imagen: "src/assets/images/mochila6.jpg",
      enlace: "producto.html",
    },
    {
      id: 7,
      nombre: "Mochila Porta Notebook S",
      precio: "$7100",
      imagen: "src/assets/images/mochila7.jpg",
      enlace: "producto.html",
    },
    {
      id: 8,
      nombre: "Mochila Running",
      precio: "$4100",
      imagen: "src/assets/images/mochila8.jpg",
      enlace: "producto.html",
    },
    {
      id: 9,
      nombre: "Morral",
      precio: "$3000",
      imagen: "src/assets/images/mochila9.jpg",
      enlace: "producto.html",
    },
  ];

  return (
    <div>
      <Header />

      <main className="contenido">
        <h1>Nuestros Productos</h1>

        <div className="galeria">
          {productos.map((producto) => (
            <div className="producto" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="info-producto">
                <p className="producto-nombre">{producto.nombre}</p>
                <p className="producto-precio">{producto.precio}</p>
                <a href={producto.enlace}>
                  <p className="boton-amarillo">Ver Producto</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
