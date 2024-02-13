import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from '../pages/RegisterPage/RegisterPage';
import HomePage from '../pages/HomePage/HomePage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
// Import any other pages you have here

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/chat" element={<ChatPage />} /> */}
        {/* Add routes for other pages as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
