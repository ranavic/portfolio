import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders header and footer', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headerElement = screen.getByRole('banner');
  const footerElement = screen.getByRole('contentinfo');
  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
