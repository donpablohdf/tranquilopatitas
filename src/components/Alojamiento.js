import React from 'react';
import Card from 'react-bootstrap/Card';

function Alojamiento() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body>
          <h3>Alojamiento de mascotas</h3>
          <h4 className="mb-2 text-muted">Cuidado de mascotas nocturno en mi casa</h4>
          <Card.Text>
            <p>Imagina un lugar donde tus amigos peludos son tratados como reyes, disfrutando de un ambiente lleno de amor y cuidados mientras tú descansas tranquilo. Aquí, cada rincón está pensado para su felicidad y bienestar.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default Alojamiento;
