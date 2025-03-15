import React from 'react';
import Card from 'react-bootstrap/Card';

function CuidadoDomicilio() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body className="d-flex flex-row-reverse p-0">
          <Card.Img 
            src="/imgs/visita-nocturna-mascotas-leon.webp"
            alt="Imagen de Alojamiento"
            className="ml-4"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
          />
          <div className="flex-grow-1 p-3">
            <h3>Cuidado a domicilio</h3>
            <h4 className="mb-2 text-muted">Cuidado de mascotas nocturno en la comodidad de tu hogar</h4>
            <Card.Text>
              <p>Ofrecemos un servicio de cuidado nocturno de mascotas directamente en la comodidad de tu hogar. Sabemos lo importante que es para ti asegurarte de que tus amigos peludos estén seguros y felices mientras estás fuera, y estamos aquí para brindarte tranquilidad absoluta.</p>

              <p>Entendemos que cada mascota es única y que su bienestar depende de mantener sus rutinas y entorno familiares. Por eso, nuestro servicio está diseñado pensando en tus necesidades: llevamos atención personalizada directamente a tu hogar, para que no tengas que preocuparte por cambiar la rutina de tus compañeros peludos. Nos adaptamos a sus necesidades específicas, garantizando que se sientan cómodos y protegidos durante toda la noche.</p>

              <p>Nuestro compromiso es garantizar que tus compañeros peludos reciban el mejor cuidado durante la noche. Me desplazo hasta tu casa para asegurarme de que todo esté en orden: desde la alimentación adecuada hasta momentos de juego y cariño. Además, me aseguro de que las rutinas de tus mascotas se mantengan intactas, respetando sus horarios y necesidades específicas. También vigilo que todo esté en perfecto estado, desde el bienestar de tus mascotas hasta la seguridad de tu hogar.</p>

              <p>Entiendo que cada mascota es única, y por eso adapto mi enfoque según sus personalidades y requerimientos. Ya sea un perro lleno de energía o un gato tranquilo y curioso, mi objetivo es hacer que se sientan relajados y protegidos. También estaré en contacto contigo, enviándote actualizaciones y fotos para que puedas dormir tranquilo sabiendo que tus peludos están en buenas manos.</p>

              <p>Estamos comprometidos a ser la solución ideal para el cuidado nocturno de tus mascotas en León, asegurando que tanto tú como tus compañeros peludos puedan disfrutar de una noche tranquila y sin preocupaciones. Con atención personalizada y un enfoque en su bienestar, tu hogar y tus mascotas estarán en las mejores manos. Confía en nosotros para brindarles cariño, seguridad y rutinas que se ajusten a sus necesidades. ¡Esperamos poder acompañarte pronto y formar parte de la tranquilidad y felicidad de tu familia! 😊🐾</p>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </article>
  );
}

export default CuidadoDomicilio;