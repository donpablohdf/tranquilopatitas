import React from 'react';
import Card from 'react-bootstrap/Card';

function VisitasDomicilio() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body className="d-flex p-0">
          <Card.Img 
            src="/imgs/visitas-domicilio-mascotas-leon.webp"
            alt="Visitas a domicilio"
            className="mr-4"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
          />
          <div className="flex-grow-1 p-3">
            <h3>Visitas a domicilio</h3>
            <h4 className="mb-2 text-muted">Visitas a tu mascota en tu propio hogar</h4>
            <Card.Text>
              <p>Con nuestras visitas a domicilio garantizamos que tus mascotas reciban toda la atención y cuidado que necesitan mientras tú no estás en casa. Sabemos lo importante que es para ti asegurarte de que tus compañeros peludos estén felices, seguros y cómodos en su propio entorno, y estamos aquí para brindarte tranquilidad absoluta.</p>

              <p>Entendemos que las mascotas se sienten más relajadas y felices cuando pueden permanecer en su hogar, rodeadas de su entorno familiar. Por eso, nuestro servicio de visitas a domicilio está diseñado para adaptarse a sus rutinas y necesidades diarias. Ya sea para dar un paseo a tu perro, alimentar a tu gato o simplemente pasar tiempo jugando y mimándolos, nos aseguramos de que cada visita esté pensada para su bienestar. Tu hogar es su refugio, y queremos que siga siéndolo incluso cuando tú no estás.</p>

              <p>Durante cada visita, nos encargamos de todo lo necesario para mantener a tus mascotas contentas y saludables. Desde sacar a pasear a tu perro, asegurarnos de que tenga agua fresca y comida, hasta revisar que todo esté en orden en tu hogar, cubrimos cada detalle con profesionalismo y cariño. Además, nos adaptamos a las indicaciones específicas que nos proporciones, ya sea seguir una rutina estricta o atender necesidades especiales de tus peludos amigos.</p>

              <p>Nuestro compromiso va más allá de simplemente visitar a tus mascotas. Buscamos crear una conexión genuina con ellas, asegurándonos de que se sientan amadas y acompañadas en todo momento. También sabemos lo importante que es para ti estar al tanto de cómo están, por lo que te proporcionaremos actualizaciones después de cada visita, ya sea a través de mensajes, fotos o videos, para que puedas estar tranquilo sabiendo que están en buenas manos.</p>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </article>
  );
}

export default VisitasDomicilio;