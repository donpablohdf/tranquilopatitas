import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Tranquilopatitas: Cuidado de Mascotas en León/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders loading fallback', () => {
  render(<App />);
  const loadingElement = screen.getByText(/Cargando.../i);
  expect(loadingElement).toBeInTheDocument();
});
