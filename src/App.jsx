import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import AdminPanel from './components/AdminPanel';
import AgregarProducto from './components/AgregarProducto';
import ProductosTable from './components/ProductosTabla';
import ModificarProducto from './components/ModificarProducto';
import ModificarUsuario from './components/ModificarUsuario';
import UsuariosTabla from './components/UsuariosTabla';
import Signup from './pages/Signup';
import RutasProtegidas from './components/RutasProtegidas'; // Importa el componente de ruta protegida
import AgregarUsuarioAdmin from './components/agregarUsuarioAdmin';

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
        <Route path="/admin" element={<RutasProtegidas element={<AdminPanel />} />} />
        <Route path="/productostabla" element={<RutasProtegidas element={<ProductosTable />} />} />
        <Route path="/agregar-producto" element={<RutasProtegidas element={<AgregarProducto />} />} />
        <Route path="/agregar-usuario" element={<RutasProtegidas element={<AgregarUsuarioAdmin />} />} />
        <Route path="/modificar-producto/:id" element={<RutasProtegidas element={<ModificarProducto />} />} />
        <Route path="/modificar-usuario/:id" element={<RutasProtegidas element={<ModificarUsuario />} />} />
        <Route path="/usuariostabla" element={<RutasProtegidas element={<UsuariosTabla />} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;