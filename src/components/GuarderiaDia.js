import React from 'react';
import Card from 'react-bootstrap/Card';

function GuarderiaDia() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body className="d-flex flex-column flex-md-row p-0">
          <div className="flex-grow-1 p-3">
            <h3>Guardería de día</h3>
            <h4 className="mb-2 text-muted">Cuidado diurno en mi propio hogar</h4>
            <Card.Text>

              <p>Mi casa es un refugio pensado para brindar comodidad y diversión a las mascotas. Desde áreas amplias para correr y jugar <strong>(dispongo de un amplio patio privado y cerrado)</strong>, hasta rincones tranquilos para relajarse, cada detalle está cuidadosamente planificado para garantizar su bienestar. Aquí tu mascota tendrá una segunda familia que la recibirá con cariño.</p>

              <p>Entendiendo que dejar a una mascota durante el día puede ser un momento delicado, por lo que mantendré comunicación constante contigo. A través de fotos y actualizaciones regulares, podrás ver lo bien que lo está pasando y relajarte sabiendo que está en buenas manos. El objetivo es que tanto tú como tu mascota os sintáis a gusto en el servicio, sabiendo que su felicidad es la mayor prioridad.</p>

            </Card.Text>
          </div>
          <Card.Img
            src="/imgs/guarderia-de-dia-mascotas-leon.webp"
            alt="Guardería de día mascotas Leon"
            className="imagen-responsiva"
          />
        </Card.Body>
      </Card>
    </article>
  );
}

export default GuarderiaDia;