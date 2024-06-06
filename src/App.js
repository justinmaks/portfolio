// src/App.js
import React, { useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Navbar from './Navbar';
import Tools from './Tools';
import Snake from './Snake';
import './App.css';

function App() {
  useEffect(() => {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 500; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <div id="background"></div>
      <div id="stars" className="stars"></div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/snake" element={<Snake />} />
      </Routes>
    </Router>
  );
}

export default App;
