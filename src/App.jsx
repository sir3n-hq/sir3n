import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import WhoAreWePage from './pages/WhoAreWePage';
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
          path="/whoarewe"
          element={<WhoAreWePage />}
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