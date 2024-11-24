import React from "react";

const ListadoPrecios = () => {
  return (
    <section className="contenedor">
      <h2 className="subtitulo">Listado de Precios Actualizado</h2>
      <p className="txt-precios">
        Los precios se encuentra siempre actualizado. LLevando mas de 5
        productos accedes a promociones unicas
      </p>

      <div className="precios">
        <div className="lista">
          <ul className="articulos">
            <li className="articulo">
              <p className="articulo-nombre">Mochila Escolar P/ Universidad</p>
              <p className="articulo-precio">$6300</p>
            </li>
            <li className="articulo">
              <p className="articulo-nombre">Mochila Everlast Deportiva</p>
              <p className="articulo-precio">$5500</p>
            </li>
            <li className="articulo">
              <p className="articulo-nombre">Mochila Anti Robo Talle Unico</p>
              <p className="articulo-precio">$8500</p>
            </li>
            <li className="articulo">
              <p className="articulo-nombre">Mochila Everlast Deportiva</p>
              <p className="articulo-precio">$5500</p>
            </li>
            <li className="articulo">
              <p className="articulo-nombre">Mochila Basica</p>
              <p className="articulo-precio">$3900</p>
            </li>
          </ul>
        </div>

        <div class="lista">
          <ul class="articulos">
            <li class="articulo">
              <p class="articulo-nombre">Mochila Running</p>
              <p class="articulo-precio">$4100</p>
            </li>
            <li class="articulo">
              <p class="articulo-nombre">morral</p>
              <p class="articulo-precio">$3000</p>
            </li>
            <li class="articulo">
              <p class="articulo-nombre">Mochila Porta Notebook XL</p>
              <p class="articulo-precio">$8000</p>
            </li>
            <li class="articulo">
              <p class="articulo-nombre">Mochila Porta Notebook S</p>
              <p class="articulo-precio">$7100</p>
            </li>
            <li class="articulo">
              <p class="articulo-nombre">Mochila estampado a pedido</p>
              <p class="articulo-precio">
                <a href="contacto.html">CONSULTAR</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ListadoPrecios;
