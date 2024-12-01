import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import productosData from '../assets/js/productos';
import AgregarProducto from './AgregarProducto';
import ModificarProducto from './ModificarProduto';
// import '../index.css';

const ProductosTable = () => {
  const [productos, setProductos] = useState(productosData); 
  const navigate = useNavigate(); 

  // Función para eliminar un producto
  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    setProductos(nuevosProductos);
    // Opcional: Actualizar en localStorage si los productos están allí
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
  };

  // Función para redirigir a la vista de modificar
  const modificarProducto = (id) => {
    navigate(`/modificar-producto/${id}`); // Asegúrate de tener esta ruta configurada
  };

  return (
    <div>
      <Header />
      <main className="contenedor">
        <h2 className="subtitulo">Lista de Productos</h2>
        <table className="tabla-productos container">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="producto-imagen"
                  />
                </td>
                <td>
                  <button
                    onClick={() => modificarProducto(producto.id)}
                    className="boton-am"
                  >
                    Modificar
                  </button>
                  <button
                    onClick={() => eliminarProducto(producto.id)}
                    className="boton-rojo"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => navigate('/agregar-producto')}
          className="boton-verde"
        >
          Agregar Producto
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default ProductosTable;