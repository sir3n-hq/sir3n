import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import AboutPage from './pages/AboutPage';
import SubmissionsPage from './pages/SubmissionsPage';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/map"
          element={<MapPage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/submissions"
          element={<SubmissionsPage />}
        />
      </Routes>
    </div>
  );
};

export default App;