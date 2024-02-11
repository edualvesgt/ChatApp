import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
// Import any other pages you have here

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/chat" element={<ChatPage />} /> */}
        {/* Add routes for other pages as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
