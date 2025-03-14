import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FaHome, FaBed, FaDog, FaWalking, FaCalendarAlt, FaPaw, FaEnvelope } from 'react-icons/fa';
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
import './css/App.css';
import Logo from './imgs/logo.js';


function App() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };
  return (
    <Router>
      <Navbar expand="lg" className="sticky-top custom-navbar" expanded={expanded} onToggle={(e) => { }} collapseOnSelect>
        <Container>
          <div><Logo color='#FFFFFF' /></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={handleNavClick}>
                <FaHome /> Quién soy
              </Nav.Link>
              <Nav.Link as={Link} to="/alojamiento" onClick={handleNavClick}>
                <FaBed /> Alojamiento
              </Nav.Link>
              <Nav.Link as={Link} to="/cuidado-domicilio" onClick={handleNavClick}>
                <FaDog /> Cuidado a domicilio
              </Nav.Link>
              <Nav.Link as={Link} to="/visitas-domicilio" onClick={handleNavClick}>
                <FaWalking /> Visitas a domicilio
              </Nav.Link>
              <Nav.Link as={Link} to="/guarderia-dia" onClick={handleNavClick}>
                <FaCalendarAlt /> Guardería de día
              </Nav.Link>
              <Nav.Link as={Link} to="/paseo-perros" onClick={handleNavClick}>
                <FaPaw /> Paseo de perros
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto" onClick={handleNavClick}>
                <FaEnvelope /> Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className="d-flex flex-column min-vh-100 mt-3">
        <header className="container app-header">
          <h1>Tranquilopatitas: Cuidado de Mascotas en León</h1>
          <p>Tu solución de confianza para el bienestar y el cuidado de tus mascotas en León.</p>
        </header>

        <Container className="mt-3 flex-grow-1">
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

        <footer className="container app-footer">
          <p>© 2025 Tranquilopatitas - Cuidado de Mascotas en León</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
