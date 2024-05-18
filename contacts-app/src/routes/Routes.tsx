// src/components/Routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import AddEditContactPage from '../pages/AddContact';
import ContactPage from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact/add" element={<AddEditContactPage />} />
      <Route path="/contact/:id" element={<AddEditContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
