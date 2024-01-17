import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Contacto from './components/pages/Contacto';
import NotFound from './components/pages/NotFound';
import Blog from './components/pages/Blog';
import Layout from './components/Layouts/Layout';
import BlogCharacter from './components/BlogCharacter';

function App() {
  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Inicio />} path="/" />
          <Route element={<Contacto />} path="/contacto" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogCharacter />} path="/blog/:id" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
