import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import QuienSoy from './components/QuienSoy';
import Alojamiento from './components/Alojamiento';
import CuidadoDomicilio from './components/CuidadoDomicilio';
import VisitasDomicilio from './components/VisitasDomicilio';
import GuarderiaDia from './components/GuarderiaDia';
import PaseoPerros from './components/PaseoPerros';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="container">
      <QuienSoy />
      <Alojamiento />
      <CuidadoDomicilio />
      <VisitasDomicilio />
      <GuarderiaDia />
      <PaseoPerros />
      <Contacto />
    </div>
  );
}

export default App;
