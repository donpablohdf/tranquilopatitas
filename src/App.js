import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { FaHome, FaBed, FaDog, FaWalking, FaCalendarAlt, FaPaw, FaEnvelope, FaEllipsisH } from 'react-icons/fa';
import QuienSoy from './components/QuienSoy';
import Alojamiento from './components/Alojamiento';
import CuidadoDomicilio from './components/CuidadoDomicilio';
import VisitasDomicilio from './components/VisitasDomicilio';
import GuarderiaDia from './components/GuarderiaDia';
import PaseoPerros from './components/PaseoPerros';
import Contacto from './components/Contacto';
import Llamadas from './components/Softphone';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/App.css';
import Logo from './imgs/logo.js';


function App() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  return (
    <Router>
      <Navbar expand="lg" className="sticky-top custom-navbar" expanded={expanded} onToggle={(e) => { }} collapseOnSelect>
        <Container>
          <div><Logo color='#FFFFFF' /></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <NavLink
                  to="/"
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}
                >
                  <FaHome /> Quién soy
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/alojamiento-mascotas-leon"
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}
                >
                  <FaBed /> Alojamiento
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/cuidado-domicilio-mascotas-leon"
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}
                >
                  <FaDog /> Cuidado a domicilio
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/visitas-domicilio-mascotas-leon"
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}
                >
                  <FaWalking /> Visitas a domicilio
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/guarderia-dia-mascotas-leon"
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}
                >
                  <FaCalendarAlt /> Guardería de día
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/paseo-perros-leon"
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}
                >
                  <FaPaw /> Paseo de perros
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/llamadas-mascotas-leon"
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}
                >
                  <FaEllipsisH /> Otros servicios
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/contacto-mascotas-leon"
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}
                >
                  <FaEnvelope /> Contacto
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex flex-column mt-3">
        <header className="container app-header">
          <h1>Tranquilopatitas: Cuidado de Mascotas en León</h1>
          <p>Tu solución de confianza para el bienestar y el cuidado de tus mascotas en León.</p>
        </header>

        <Container className="mt-3 flex-grow-1">
          <Routes>
            <Route path="/" element={<QuienSoy />} />
            <Route path="/alojamiento-mascotas-leon" element={<Alojamiento />} />
            <Route path="/cuidado-domicilio-mascotas-leon" element={<CuidadoDomicilio />} />
            <Route path="/visitas-domicilio-mascotas-leon" element={<VisitasDomicilio />} />
            <Route path="/guarderia-dia-mascotas-leon" element={<GuarderiaDia />} />
            <Route path="/paseo-perros-leon" element={<PaseoPerros />} />
            <Route path="/llamadas-mascotas-leon" element={<Llamadas />} />
            <Route path="/contacto-mascotas-leon" element={<Contacto />} />
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
