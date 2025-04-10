import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBed, FaCalendarAlt, FaDog, FaDollarSign, FaEnvelope, FaHome, FaPaw, FaStethoscope, FaUtensils, FaWalking } from 'react-icons/fa';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import './css/App.css';
import Logo from './imgs/logo.js';

const Section = React.lazy(() => import('./components/Section'));

function App() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleNavClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  const navLinks = [
    {
      path: '/', icon: <FaHome />, title: 'Quién soy', subtitle: 'Cuidado de mascotas en León', imageSrc: '/imgs/quien-soy-mascotas-leon.webp', imageAlt: 'Cuidado de mascotas en León', content:
        <>
          <article>
            <p>Hola soy Pablo, el fundador de <strong>TRANQUILOPATITAS</strong>, mi amor por las mascotas no solo es un interés personal, sino una verdadera vocación que me ha llevado a dedicar mi tiempo y energía a su bienestar. A través de estos servicios, busco crear un puente de confianza entre tú, tus peludos compañeros y yo, asegurándome de que siempre reciban la atención y el cariño que merecen.</p>
            <p>Ya sea como compañeros incondicionales o como parte fundamental del hogar, las mascotas tienen un lugar especial en nuestros corazones. Por eso ofrezco servicios que combinan amor y compromiso para garantizar su felicidad y tranquilidad.</p>
            <p>Mi enfoque se basa en brindar atención personalizada, adaptándome a sus rutinas, personalidades y requerimientos únicos. Además, valoro profundamente la relación de confianza que construyo con los dueños, sabiendo que me están confiando lo más importante: <strong>el bienestar de sus compañeros peludos.</strong></p>
          </article>
        </>
    },

    {
      path: '/alojamiento-mascotas-leon', icon: <FaBed />, title: 'Alojamiento', subtitle: 'Cuidado de mascotas nocturno en mi casa', imageSrc: '/imgs/alojamiento-mascotas-leon.webp', imageAlt: 'Alojamiento mascotas Leon', content:
        <>
          <article>
            <p>Si necesitas irte de vacaciones o simplemente un día tienes algo que hacer y no puedes ocuparte de tu mascota, en mi hogar, me aseguro de que todas las necesidades de tus peludos amigos estén cubiertas, brindándoles un entorno seguro y actividades que los mantengan tranquilos y felices durante toda la noche.</p>
            <p>Mi prioridad es que tus compañeros peludos disfruten de un espacio cómodo, con zonas dedicadas tanto para jugar <strong>(dispongo de un amplio patio privado y cerrado) </strong>como para descansar. Además, me aseguro de que sigan sus rutinas habituales de comida y cuidado, ofreciéndoles todo el cariño que necesitan. Sabemos lo importantes que son para ti, por eso te puedo enviar fotos y mensajes para que siempre estés al tanto de cómo están pasando la noche.</p>
            <p>¡Espero conocerte pronto y formar parte de sus momentos especiales! 😊🐾</p>
          </article>
        </>
    },

    {
      path: '/cuidado-domicilio-mascotas-leon', icon: <FaDog />, title: 'Cuidado nocturno', subtitle: 'Cuidado de mascotas nocturno', imageSrc: '/imgs/visita-nocturna-mascotas-leon.webp', imageAlt: 'visita mascotas Leon', content:
        <>
          <article>
            <p>Ofrecemos un servicio de cuidado nocturno de mascotas <strong>en tu hopar</strong>. Sabemos lo importante que es para ti asegurarte de que tus amigos peludos estén seguros y felices mientras estás fuera, y estamos aquí para brindarte tranquilidad absoluta.</p>
            <p>Entiendo que cada mascota es única, y por eso adapto mi enfoque según sus personalidades y requerimientos. También estaré en contacto contigo, enviándote actualizaciones y fotos para que puedas dormir tranquilo sabiendo que tus peludos están en buenas manos.</p>
            <p><strong>Tu hogar</strong> y tus mascotas estarán en las mejores manos. Confía en nosotros para brindarles cariño, seguridad y rutinas nocturnas que se ajusten a sus necesidades.</p>
          </article>
        </>
    },

    {
      path: '/visitas-domicilio-mascotas-leon', icon: <FaWalking />, title: 'Visitas a domicilio', subtitle: 'Visitas a tu mascota en tu propio hogar', imageSrc: '/imgs/visitas-domicilio-mascotas-leon.webp', imageAlt: 'Visitas a domicilio mascotas Leon', content:
        <>
          <article>
            <p>Con nuestras visitas a domicilio garantizamos que tus mascotas reciban toda la atención y cuidado que necesitan mientras tú no estás en casa. Sabemos lo importante que es para ti asegurarte de que tus compañeros peludos estén felices, seguros y cómodos en su propio entorno.</p>
            <p>Nos encargamos de todo lo necesario. Desde sacar a pasear a tu perro, asegurarnos de que tenga agua fresca y comida, hasta revisar que todo esté en orden en tu hogar. Nos adaptamos a las indicaciones específicas que nos proporciones, ya sea seguir una rutina estricta o atender necesidades especiales de tus peludos amigos.</p>
            <p>También sabemos lo importante que es para ti estar al tanto de cómo están, por lo que te proporcionaremos actualizaciones después de cada visita, ya sea a través de mensajes, fotos o videos, para que puedas estar tranquilo sabiendo que están en buenas manos tus mascotas y tu propio hogar.</p>
          </article>
        </>
    },

    {
      path: '/guarderia-dia-mascotas-leon', icon: <FaCalendarAlt />, title: 'Guardería de día', subtitle: 'Cuidado diurno en mi propio hogar', imageSrc: '/imgs/guarderia-de-dia-mascotas-leon.webp', imageAlt: 'Guardería de día mascotas Leon', content:
        <>
          <article>
            <p>Mi casa es un refugio pensado para brindar comodidad y diversión a las mascotas. Desde áreas amplias para correr y jugar <strong>(dispongo de un amplio patio privado y cerrado)</strong>, hasta rincones tranquilos para relajarse, cada detalle está cuidadosamente planificado para garantizar su bienestar. Aquí tu mascota tendrá una segunda familia que la recibirá con cariño.</p>
            <p>Entendiendo que dejar a una mascota durante el día puede ser un momento delicado, por lo que mantendré comunicación constante contigo. A través de fotos y actualizaciones regulares, podrás ver lo bien que lo está pasando y relajarte sabiendo que está en buenas manos. El objetivo es que tanto tú como tu mascota os sintáis a gusto en el servicio, sabiendo que su felicidad es la mayor prioridad.</p>
          </article>
        </>
    },

    {
      path: '/paseo-perros-leon', icon: <FaPaw />, title: 'Paseo de perros', subtitle: 'Cuidado de mascotas', imageSrc: '/imgs/paseo-perros-mascotas-leon.webp', imageAlt: 'Paseo de perros en Leon', content:
        <>
          <article>
            <p>En <strong>TRANQUILOPATITAS</strong>, ofrezco un servicio personalizado de paseo de perros en León. Sé lo importante que es para ti que tu perro reciba ejercicio, estimulación mental y momentos de diversión. Por eso, estoy aquí para ser el compañero de aventuras diarias de tu perro, brindándole caminatas seguras, saludables y llenas de energía.</p>
            <p>Conozco los mejores lugares en León para disfrutar del aire fresco, desde parques arbolados hasta senderos tranquilos, donde tu perro podrá olfatear, correr y socializar en un entorno seguro y controlado.</p>
            <h4 className="mb-2 text-muted">Paseos temáticos</h4>
            <p>Descubre nuestros <strong>Paseos Temáticos</strong>, diseñados para ofrecer experiencias únicas y refrescantes a tu mascota. Ya sea un relajante paseo por la <em>playa</em>, una aventura en las <em>montañas</em>, o un día de exploración en un <em>parque</em> lejos de su ciudad, cada salida está pensada para que tu peludo amigo disfrute al máximo mientras se conecta con la naturaleza.</p>
          </article>
        </>
    },

    {
      path: '/comida-mascotas-leon', icon: <FaUtensils />, title: 'Comida a domicilio', subtitle: '¿Quieres consentir a tu mascota con comida casera y nutritiva?', imageSrc: '/imgs/comida-domicilio-mascotas-leon.webp', imageAlt: 'Comida mascotas Leon', content:
        <>
          <article>
            <p>En <strong>TRANQUILOPATITAS</strong>, preparamos recetas caseras y te las llevamos a casa para darle un capricho a tu mascota. Cada receta está diseñada para complementar la dieta de tu peludo y mantenerlo feliz y saludable.</p>
            <p><strong>Ejemplos:</strong></p>
            <ul>
              <li><strong>Para perros:</strong> Pollo cocido desmenuzado + arroz integral + zanahoria rallada (¡sin cebolla ni ingredientes tóxicos!).</li>
              <li><strong>Para gatos:</strong> Salmón al vapor + calabaza asada + un toque de hierbas aromáticas (siempre sin ajo ni cebolla).</li>
            </ul>
            <p>¿Necesitas una receta personalizada para las necesidades específicas de tu mascota? ¡Cuéntame más y juntos crearemos un menú ideal! 🐾</p>
          </article>
        </>
    },

    {
      path: '/veterinario-mascotas-leon', icon: <FaStethoscope />, title: 'Visitas al veterinario', subtitle: 'La salud de tu mascota en buenas manos', imageSrc: '/imgs/veterinario-mascotas-leon.webp', imageAlt: 'Veterinario en Leon', content:
        <>
          <article>
            <p>Ofrezco un servicio personalizado donde recojo a tu mascota en tu casa, la llevo al <strong>veterinario de tu elección en León</strong>, y después la devuelvo sana y salva a tu hogar. Tu tranquilidad y el bienestar de tu mascota son mi prioridad.</p>

            <p>Me aseguro de que cada paso del proceso sea lo más cómodo posible tanto para ti como para tu mascota. Desde el momento en que llego a tu puerta hasta el regreso, mantengo un ambiente tranquilo y seguro, brindando atención individualizada en todo momento. Además, estaré encantado de mantenerte informado durante cada etapa del trayecto, enviándote fotos o mensajes para que siempre sepas cómo está tu mascota.</p>

            <p>¡Contáctame hoy mismo y deja que me encargue de todo!</p>
          </article>
        </>
    },

    {
      path: '/precios-mascotas-leon', icon: <FaDollarSign />, title: 'Tarifas', subtitle: 'Precios básicos', imageSrc: '/imgs/precios-mascotas-leon.webp', imageAlt: 'Precios mascotas León', content:
        <>
          <article>
            <p>Muchas variables pueden influir en los servicios que ofrezco, por eso a continuación se presentan las <strong>tarifas básicas</strong>. Lo que los precios pueden ajustarse según factores como la distancia, la duración o los servicios personalizados.</p>

            {/* Tarjetas de precios para dispositivos móviles */}
            <div className="pricing-cards d-block d-lg-none">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><NavLink to="/alojamiento-mascotas-leon">Alojamiento 24h</NavLink></h5>
                      <h6 className="card-subtitle mb-2 text-muted">Consultar</h6>
                      <p className="card-text"><NavLink to="/contacto-mascotas-leon">Contáctame</NavLink> para precios por semanas, días o meses</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><NavLink to="/cuidado-domicilio-mascotas-leon">Cuidado Nocturno</NavLink></h5>
                      <h6 className="card-subtitle mb-2 text-muted">30 €</h6>
                      <p className="card-text">Por noche, <strong>en tu hogar</strong>.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><NavLink to="/visitas-domicilio-mascotas-leon">Visitas a domicilio</NavLink></h5>
                      <h6 className="card-subtitle mb-2 text-muted">10 €</h6>
                      <p className="card-text">Por visita</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><NavLink to="/guarderia-dia-mascotas-leon">Guardería de día</NavLink></h5>
                      <h6 className="card-subtitle mb-2 text-muted">50 €</h6>
                      <p className="card-text"><strong>En mi hogar</strong>. Con paseos y actividades incluidas.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><NavLink to="/paseo-perros-leon">Paseo de perros</NavLink></h5>
                      <h6 className="card-subtitle mb-2 text-muted">10 € / hora</h6>
                      <p className="card-text"><NavLink to="/contacto-mascotas-leon">Contáctame</NavLink> para precios por semanas o meses y cantidad de horas</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><NavLink to="/paseo-perros-leon">Paseos temáticos</NavLink></h5>
                      <h6 className="card-subtitle mb-2 text-muted"><NavLink to="/contacto-mascotas-leon">Contáctame</NavLink></h6>
                      <p className="card-text">Precios por actividad (playa, montaña, etc)</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><NavLink to="/comida-mascotas-leon">Comida a domicilio</NavLink></h5>
                      <h6 className="card-subtitle mb-2 text-muted">Según menú</h6>
                      <p className="card-text"><NavLink to="/contacto-mascotas-leon">Contáctame</NavLink> para ver condiciones</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><NavLink to="/veterinario-mascotas-leon">Veterinario</NavLink></h5>
                      <h6 className="card-subtitle mb-2 text-muted">15 €</h6>
                      <p className="card-text">Recogida, traslado y entrega en tu hogar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabla tradicional para pantallas más grandes */}
            <div className="d-none d-lg-block">
              <div className="table-responsive">
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Servicio</th>
                      <th>Tarifa Básica</th>
                      <th>Detalles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><NavLink to="/alojamiento-mascotas-leon">Alojamiento 24h</NavLink></td>
                      <td>Consultar</td>
                      <td><NavLink to="/contacto-mascotas-leon">Contáctame</NavLink> para precios por semanas, días o meses</td>
                    </tr>
                    <tr>
                      <td><NavLink to="/cuidado-domicilio-mascotas-leon">Cuidado Nocturno</NavLink></td>
                      <td>30 €</td>
                      <td>Por noche, <strong>en tu hogar</strong>.</td>
                    </tr>
                    <tr>
                      <td><NavLink to="/visitas-domicilio-mascotas-leon">Visitas a domicilio</NavLink></td>
                      <td>10 €</td>
                      <td>Por visita</td>
                    </tr>
                    <tr>
                      <td><NavLink to="/guarderia-dia-mascotas-leon">Guardería de día</NavLink></td>
                      <td>50 €</td>
                      <td><strong>En mi hogar</strong>. Con paseos y actividades incluidas.</td>
                    </tr>
                    <tr>
                      <td><NavLink to="/paseo-perros-leon">Paseo de perros</NavLink></td>
                      <td>10 € / hora</td>
                      <td><NavLink to="/contacto-mascotas-leon">Contáctame</NavLink> para precios por semanas o meses y cantidad de horas</td>
                    </tr>
                    <tr>
                      <td><NavLink to="/paseo-perros-leon">Paseos temáticos</NavLink></td>
                      <td><NavLink to="/contacto-mascotas-leon">Contáctame</NavLink></td>
                      <td>Precios por actividad (playa, montaña, etc)</td>
                    </tr>
                    <tr>
                      <td><NavLink to="/comida-mascotas-leon">Comida a domicilio</NavLink></td>
                      <td>Según menú</td>
                      <td><NavLink to="/contacto-mascotas-leon">Contáctame</NavLink> para ver condiciones</td>
                    </tr>
                    <tr>
                      <td><NavLink to="/veterinario-mascotas-leon">Veterinario</NavLink></td>
                      <td>15 €</td>
                      <td>Recogida, traslado y entrega en tu hogar.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="note">*Las tarifas pueden variar según la ubicación, el número de mascotas o servicios adicionales. <NavLink to="/contacto-mascotas-leon">Contáctame</NavLink> para una cotización personalizada o servicio que necesites.</p>
          </article>
        </>
    },

    {
      path: '/contacto-mascotas-leon', icon: <FaEnvelope />, title: 'Contacto', subtitle: '¡a cualquier hora y con ideas nuevas!', imageSrc: '/imgs/ayuda-mascotas-leon.webp', imageAlt: 'Ayuda mascotas León', content:
        <>
          <article>
            <p>En <strong>TRANQUILOPATITAS</strong>, estoy disponible para ti <em>a cualquier hora del día</em>. Si necesitas ayuda con el cuidado de tu mascota, no dudes en contactarme cuando lo necesites. Además, si tienes alguna idea o servicio especial en mente, ¡no dudes en consultarme! Estoy aquí para ofrecerte soluciones personalizadas y asegurarme de que tu peludo amigo reciba siempre el mejor trato. 🐾</p>
            <p>Email: <a href="mailto:tranquilopatitas@gmail.com">tranquilopatitas@gmail.com</a><br />Teléfono: <a href="tel:+34669810978">+34 669810978</a></p>
          </article>
        </>
    }
  ];

  return (
    <>
      <header className="banner-header py-2">
        <div className="d-flex flex-column justify-content-center align-items-left">
          <h1 className="mb-2">Tranquilopatitas: Cuidado de Mascotas en León</h1>
          <p className="mb-0">Tu solución de confianza para el bienestar y el cuidado de tus mascotas en León.</p>
        </div>
      </header>

      <Navbar expand="lg" className="d-flex sticky-top custom-navbar" expanded={expanded} collapseOnSelect>
        <Container fluid>
          <div className="d-flex w-100">
            <div className={`d-flex align-items-center justify-content-end mr-5 ${expanded ? 'd-none' : ''}`}>
              <Logo color="#FFFFFF" />
            </div>
            <div className="d-flex flex-column w-100 ms-5">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setExpanded(!expanded)}
                className={`ms-auto ${expanded ? 'd-none' : ''}`}
              />
            </div>
            <div className="d-flex flex-column w-100">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {navLinks.map((link, index) => (
                    <Nav.Item key={index}>
                      <NavLink
                        to={link.path}
                        end
                        onClick={handleNavClick}
                        className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}
                      >
                        {link.icon} {link.title}
                      </NavLink>
                    </Nav.Item>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>

      <div className="d-flex flex-column mt-3 w-100">
        <Container className="mt-2 flex-grow-1">
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              {navLinks.map((link, index) => (
                <Route key={index} path={link.path} element={<Section {...link} />} />
              ))}
            </Routes>
          </Suspense>
        </Container>

        <footer className="container app-footer">
          <p>© 2025 Tranquilopatitas - Cuidado de Mascotas en León</p>
        </footer>
      </div>
    </>
  );
}

export default App;
