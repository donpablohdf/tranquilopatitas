import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { FaHome, FaBed, FaDog, FaWalking, FaCalendarAlt, FaPaw, FaEnvelope, FaUtensils, FaStethoscope } from 'react-icons/fa';
import QuienSoy from './components/QuienSoy';
import Alojamiento from './components/Alojamiento';
import CuidadoDomicilio from './components/CuidadoDomicilio';
import VisitasDomicilio from './components/VisitasDomicilio';
import GuarderiaDia from './components/GuarderiaDia';
import PaseoPerros from './components/PaseoPerros';
import Contacto from './components/Contacto';
import Veterinario from './components/Veterinario';
import Alimentacion from './components/Alimentacion';
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

  const navLinks = [
    { path: '/', icon: <FaHome />, title: 'Quién soy', component: QuienSoy },
    { path: '/alojamiento-mascotas-leon', icon: <FaBed />, title: 'Alojamiento', component: Alojamiento },
    { path: '/cuidado-domicilio-mascotas-leon', icon: <FaDog />, title: 'Cuidado a domicilio', component: CuidadoDomicilio },
    { path: '/visitas-domicilio-mascotas-leon', icon: <FaWalking />, title: 'Visitas a domicilio', component: VisitasDomicilio },
    { path: '/guarderia-dia-mascotas-leon', icon: <FaCalendarAlt />, title: 'Guardería de día', component: GuarderiaDia },
    { path: '/paseo-perros-leon', icon: <FaPaw />, title: 'Paseo de perros', component: PaseoPerros },
    { path: '/comida-mascotas-leon', icon: <FaUtensils />, title: 'Comida a domicilio', component: Alimentacion },
    { path: '/veterinario-mascotas-leon', icon: <FaStethoscope />, title: 'Visitas al veterinario', component: Veterinario },
    { path: '/contacto-mascotas-leon', icon: <FaEnvelope />, title: 'Contacto', component: Contacto }
  ];

  return (
    <Router>
      <Navbar expand="lg" className="sticky-top custom-navbar" expanded={expanded} collapseOnSelect>

        <div className='ms-2'><Logo color='#FFFFFF' /></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link, index) => (
              <Nav.Item key={index}>
                <NavLink
                  to={link.path}
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}
                >
                  {link.icon} {link.title}
                </NavLink>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="d-flex flex-column mt-3">


        <Container className="mt-2 flex-grow-1">
          <Routes>
            {navLinks.map((link, index) => (
              <Route key={index} path={link.path} element={<link.component />} />
            ))}
          </Routes>
        </Container>
        <header className="container app-header">
          <h1>Tranquilopatitas: Cuidado de Mascotas en León</h1>
          <p>Tu solución de confianza para el bienestar y el cuidado de tus mascotas en León.</p>
        </header>

        <footer className="container app-footer">
          <p>© 2025 Tranquilopatitas - Cuidado de Mascotas en León</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;