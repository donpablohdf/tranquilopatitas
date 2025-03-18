
import React from 'react';
import Card from 'react-bootstrap/Card';

function Veterinario() {
  return (
    <article>
      <Card className="mb-4">
        <div className="d-flex flex-column flex-md-row">
          <Card.Img
            src="/imgs/veterinario-mascotas-leon.webp"
            alt="Veterinario en Leon"
            className="imagen-responsiva"
          />
          <Card.Body>
            <h3>Visitas al veterinario</h3>
            <h4 className="mb-2 text-muted">La salud de tu mascota en buenas manos</h4>
            <Card.Text>
              <section>
                <p>Ofrezco un servicio personalizado donde recojo a tu mascota en tu casa, la llevo al <strong>veterinario de tu elección en León</strong>, y después la devuelvo sana y salva a tu hogar. Tu tranquilidad y el bienestar de tu mascota son mi prioridad.</p>

                <p>Me aseguro de que cada paso del proceso sea lo más cómodo posible tanto para ti como para tu mascota. Desde el momento en que llego a tu puerta hasta el regreso, mantengo un ambiente tranquilo y seguro, brindando atención individualizada en todo momento. Además, estaré encantado de mantenerte informado durante cada etapa del trayecto, enviándote fotos o mensajes para que siempre sepas cómo está tu mascota.</p>

                <p>¡Contáctame hoy mismo y deja que me encargue de todo!</p>
              </section>

            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </article>
  );
}

export default Veterinario;
