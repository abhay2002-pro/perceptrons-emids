import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Audio from './components/Audio';
import Medication from './components/Medication/Medication';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/audio" element={<Audio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
