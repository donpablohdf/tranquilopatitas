import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import App from './App';
import { NavProvider } from './context/NavContext';
import './css/index.css';
import reportWebVitals from './reportWebVitals';

// Crear el root con ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envuelve la aplicación con BrowserRouter */}
      <NavProvider>
        <App />
      </NavProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Medir el rendimiento de la aplicación
reportWebVitals();
