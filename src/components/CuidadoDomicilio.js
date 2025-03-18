import React from 'react';
import Card from 'react-bootstrap/Card';

function CuidadoDomicilio() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body className="d-flex flex-column flex-md-row p-0">
          <div className="flex-grow-1 p-3">
            <h3>Cuidado a domicilio</h3>
            <h4 className="mb-2 text-muted">Cuidado de mascotas nocturno en la comodidad de tu hogar</h4>
            <Card.Text>
              <p>Ofrecemos un servicio de cuidado nocturno de mascotas directamente en la comodidad de tu hogar. Sabemos lo importante que es para ti asegurarte de que tus amigos peludos estén seguros y felices mientras estás fuera, y estamos aquí para brindarte tranquilidad absoluta.</p>

              <p>Entiendo que cada mascota es única, y por eso adapto mi enfoque según sus personalidades y requerimientos. También estaré en contacto contigo, enviándote actualizaciones y fotos para que puedas dormir tranquilo sabiendo que tus peludos están en buenas manos.</p>

              <p>Con atención personalizada y un enfoque en su bienestar, tu hogar y tus mascotas estarán en las mejores manos. Confía en nosotros para brindarles cariño, seguridad y rutinas que se ajusten a sus necesidades. ¡Esperamos poder acompañarte pronto y formar parte de la tranquilidad y felicidad de tu familia! 😊🐾</p>
            </Card.Text>
          </div>
          <Card.Img
            src="/imgs/visita-nocturna-mascotas-leon.webp"
            alt="visita mascotas Leon"
            className="imagen-responsiva"
          />
        </Card.Body>

      </Card>
    </article>
  );
}

export default CuidadoDomicilio;