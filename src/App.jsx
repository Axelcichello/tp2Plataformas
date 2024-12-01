import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from 'react-router-dom';

// Importa las páginas
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import AdminPanel from './components/AdminPanel';
import AgregarProducto from './components/AgregarProducto';
import AgregarUsuario from './components/AgregarUsuario';
import ProductosTable from './components/ProductosTabla';
import ModificarProducto from './components/ModificarProduto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel/>} />
        <Route path="/productostabla" element={<ProductosTable/>} />
        <Route path="/agregar-producto" element={<AgregarProducto />} />
        <Route path="/agregar-usuario" element={<AgregarUsuario />} />
        <Route path="/modificar-producto/:id" element={<ModificarProducto />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;