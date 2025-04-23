import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthCallback from './components/AuthCallback';
import App from './App'; // Assuming app is the main component of your application


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes; 