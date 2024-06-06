// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  const toolsLink = screen.getByText(/tools/i);
  const snakeLink = screen.getByText(/snake/i);
  
  expect(homeLink).toBeInTheDocument();
  expect(toolsLink).toBeInTheDocument();
  expect(snakeLink).toBeInTheDocument();
});
