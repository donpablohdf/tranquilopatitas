
import React from 'react';
import Card from 'react-bootstrap/Card';

function Alojamiento() {
  return (
    <article>
      <Card className="mb-4">
        <div className="d-flex flex-column flex-md-row">
          <Card.Img
            src="/imgs/alojamiento-mascotas-leon.webp"
            alt="Alojamiento mascotas Leon"
            className="imagen-responsiva"
          />
          <Card.Body>
            <h3>Alojamiento de mascotas</h3>
            <h4 className="mb-2 text-muted">Cuidado de mascotas nocturno en mi casa</h4>

            <Card.Text>
              <p>Si necesitas irte de vacaciones o simplemente un día tienes algo que hacer y no puedes ocuparte de tu mascota, en mi hogar, me aseguro de que todas las necesidades de tus peludos amigos estén cubiertas, brindándoles un entorno seguro y actividades que los mantengan tranquilos y felices durante toda la noche.</p>

              <p>Mi prioridad es que tus compañeros peludos disfruten de un espacio cómodo, con zonas dedicadas tanto para jugar <strong>(dispongo de un amplio patio privado y cerrado) </strong>como para descansar. Además, me aseguro de que sigan sus rutinas habituales de comida y cuidado, ofreciéndoles todo el cariño que necesitan. Sabemos lo importantes que son para ti, por eso te puedo enviar fotos y mensajes para que siempre estés al tanto de cómo están pasando la noche.</p>

              <p>¡Espero conocerte pronto y formar parte de sus momentos especiales! 😊🐾</p>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </article>
  );
}

export default Alojamiento;
