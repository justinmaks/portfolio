// src/App.js
import React, { useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import Profile from './Profile';
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
    <div>
      <CssBaseline />
      <div id="background"></div>
      <div id="stars" className="stars"></div>
      <Profile />
    </div>
  );
}

export default App;
