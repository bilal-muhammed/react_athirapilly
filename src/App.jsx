import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Tours from './pages/Tours';
import Vehicles from './pages/Vehicles';
import MyBookings from './components/Bookings.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="tours" element={<Tours />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="mybookings" element={<MyBookings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
