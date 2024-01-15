import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Contacto from './components/pages/Contacto';
import NotFound from './components/pages/NotFound';
import Blog from './components/pages/Blog';

function App() {
 return (
  <div>
    <Navbar />
    <h1>App</h1>
    <Routes>
      <Route element={<Inicio />} path="/" />
      <Route element={<Contacto />} path="/contacto" />
      <Route element={<Blog />} path="/blog" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  </div>
 );
}

export default App;
