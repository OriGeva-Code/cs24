import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainApp from './pages/MainApp';
import LandingPage from './pages/LandingPage';
import AuthCallback from './components/AuthCallback';

const isDevMode = process.env.REACT_APP_DEV === 'true';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={isDevMode ? <LandingPage /> : <MainApp />} />
        <Route path="/MainApp" element={<MainApp />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes; 