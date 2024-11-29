import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const productos = [
    {
      id: 1,
      nombre: "Mochila Escolar P/ Universidad",
      precio: "$6300",
      imagen: "/src/assets/images/mochila1.jpg",
      enlace: "/Product",
    },
    {
      id: 2,
      nombre: "Mochila Escolar Doble Cierre",
      precio: "$6200",
      imagen: "/src/assets/images/mochila2.jpg",
      enlace: "/Product",
    },
    {
      id: 3,
      nombre: "Mochila Anti Robo Talle Unico",
      precio: "$8500",
      imagen: "/src/assets/images/mochila3.jpg",
      enlace: "/Product",
    },
    {
      id: 4,
      nombre: "Mochila Everlast Deportiva",
      precio: "$5500",
      imagen: "/src/assets/images/mochila4.jpg",
      enlace: "/Product",
    },
    {
      id: 5,
      nombre: "Mochila Básica",
      precio: "$3900",
      imagen: "/src/assets/images/mochila5.jpg",
      enlace: "/Product",
    },
    {
      id: 6,
      nombre: "Mochila Porta Notebook XL",
      precio: "$8000",
      imagen: "/src/assets/images/mochila6.jpg",
      enlace: "/Product",
    },
    {
      id: 7,
      nombre: "Mochila Porta Notebook S",
      precio: "$7100",
      imagen: "/src/assets/images/mochila7.jpg",
      enlace: "/Product",
    },
    {
      id: 8,
      nombre: "Mochila Running",
      precio: "$4100",
      imagen: "/src/assets/images/mochila8.jpg",
      enlace: "/Product",
    },
    {
      id: 9,
      nombre: "Morral",
      precio: "$3000",
      imagen: "/src/assets/images/mochila9.jpg",
      enlace: "/Product",
    },
  ];
  
  // Convertir a JSON y guardar en localStorage
  localStorage.setItem("productos", JSON.stringify(productos));
  console.log("Productos cargados en localStorage");
  



  return (
    <footer className="footer">
      <div className="contenedor">
        <nav className="navegacion">
          <Link to="/About">Nosotros</Link>
          <Link to="/Gallery">Galeria</Link>
          <Link to="/Contact">Contacto</Link>
        </nav>
      </div>

      <p>Todos los derechos reservados 2024</p>
    </footer>
  );
};

export default Footer;
