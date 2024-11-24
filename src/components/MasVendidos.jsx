import React from 'react';
import mochila1 from '../assets/images/mochila1.jpg';
import mochila2 from '../assets/images/mochila2.jpg';
import mochila3 from '../assets/images/mochila3.jpg';

const MasVendidos = () => {
  return (
    <section className="contenedor">
      <h2 className="subtitulo">Modelos más vendidos</h2>

      <div className="contenedor-anuncios">
        <div className="anuncio">
          <img className="anuncio-foto" src={mochila1} alt="Mochila Escolar P/ Universidad" />
          <div className="contenido-anuncio">
            <h3>Mochila Escolar P/ Universidad</h3>
            <p>Mochila en variantes de colores ideal para estudiantes universitarios o secundarios.</p>
            <p className="precio">$6300</p>
            <a href="producto.html" className="boton-amarillo">Ver Mochila</a>
          </div>
        </div>

        <div className="anuncio">
          <img className="anuncio-foto" src={mochila2} alt="Mochila Escolar Doble Cierre" />
          <div className="contenido-anuncio">
            <h3>Mochila Escolar Doble Cierre</h3>
            <p>Doble cierre para guardar pequeños útiles. Descuento en efectivo solo en este modelo y color.</p>
            <p className="precio">$6200</p>
            <a href="producto.html" className="boton-amarillo">Ver Mochila</a>
          </div>
        </div>

        <div className="anuncio">
          <img className="anuncio-foto" src={mochila3} alt="Mochila Anti Robo Talle Único" />
          <div className="contenido-anuncio">
            <h3>Mochila Anti Robo Talle Único</h3>
            <p>Para llevar notebooks y consolas de videojuegos, impermeable. Con sistema de rastreo SMS.</p>
            <p className="precio">$8500</p>
            <a href="producto.html" className="boton-amarillo">Ver Mochila</a>
          </div>
        </div>
      </div>

      <div className="centrado">
        <a href="#" className="boton-verde">Ver Todas</a>
      </div>
    </section>
  );
};

export default MasVendidos;
