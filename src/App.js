import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import QuienSoy from './components/QuienSoy';
import Alojamiento from './components/Alojamiento';
import CuidadoDomicilio from './components/CuidadoDomicilio';
import VisitasDomicilio from './components/VisitasDomicilio';
import GuarderiaDia from './components/GuarderiaDia';
import PaseoPerros from './components/PaseoPerros';
import Contacto from './components/Contacto';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Tranquilopatitas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Quién soy</Nav.Link>
              <Nav.Link as={Link} to="/alojamiento">Alojamiento</Nav.Link>
              <Nav.Link as={Link} to="/cuidado-domicilio">Cuidado a domicilio</Nav.Link>
              <Nav.Link as={Link} to="/visitas-domicilio">Visitas a domicilio</Nav.Link>
              <Nav.Link as={Link} to="/guarderia-dia">Guardería de día</Nav.Link>
              <Nav.Link as={Link} to="/paseo-perros">Paseo de perros</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<QuienSoy />} />
          <Route path="/alojamiento" element={<Alojamiento />} />
          <Route path="/cuidado-domicilio" element={<CuidadoDomicilio />} />
          <Route path="/visitas-domicilio" element={<VisitasDomicilio />} />
          <Route path="/guarderia-dia" element={<GuarderiaDia />} />
          <Route path="/paseo-perros" element={<PaseoPerros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Container>

      <footer className="container">
        <p>© 2025 Tranquilopatitas - Cuidado de Mascotas en León</p>
      </footer>
    </Router>
  );
}

export default App;
