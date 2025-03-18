import React from 'react';
import Card from 'react-bootstrap/Card';

function VisitasDomicilio() {
  return (
    <article>
      <Card className="mb-4">

        <div className="d-flex flex-column flex-md-row">
          <Card.Img
            src="/imgs/visitas-domicilio-mascotas-leon.webp"
            alt="Visitas a domicilio mascotas Leon"
            className="imagen-responsiva"
          />
          <Card.Body>
            <h3>Visitas a domicilio</h3>
            <h4 className="mb-2 text-muted">Visitas a tu mascota en tu propio hogar</h4>
            <Card.Text>
              <p>Con nuestras visitas a domicilio garantizamos que tus mascotas reciban toda la atención y cuidado que necesitan mientras tú no estás en casa. Sabemos lo importante que es para ti asegurarte de que tus compañeros peludos estén felices, seguros y cómodos en su propio entorno.</p>              

              <p>Nos encargamos de todo lo necesario. Desde sacar a pasear a tu perro, asegurarnos de que tenga agua fresca y comida, hasta revisar que todo esté en orden en tu hogar. Nos adaptamos a las indicaciones específicas que nos proporciones, ya sea seguir una rutina estricta o atender necesidades especiales de tus peludos amigos.</p>

              <p>También sabemos lo importante que es para ti estar al tanto de cómo están, por lo que te proporcionaremos actualizaciones después de cada visita, ya sea a través de mensajes, fotos o videos, para que puedas estar tranquilo sabiendo que están en buenas manos tus mascotas y tu propio hogar.</p>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </article>
  );
}

export default VisitasDomicilio;