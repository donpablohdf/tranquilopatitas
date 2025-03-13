import React from 'react';
import Card from 'react-bootstrap/Card';

function GuarderiaDia() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body>
          <h3>Guardería de día</h3>
          <h4 className="mb-2 text-muted">Cuidado de mascotas diurno en mi casa</h4>
          <Card.Text>
            <p>En nuestra guardería diurna, cada día se convierte en una aventura llena de nuevas experiencias, socialización y mucho amor, asegurando que tu mascota regrese a casa feliz y satisfecha al final de la jornada.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default GuarderiaDia;
