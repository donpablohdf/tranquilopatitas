import React from 'react';
import Card from 'react-bootstrap/Card';

function CuidadoDomicilio() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body>
          <h3>Cuidado a domicilio</h3>
          <h4 className="mb-2 text-muted">Cuidado de mascotas nocturno en la casa del dueño</h4>
          <Card.Text>
            <p>En la comodidad de tu hogar, me aseguro de que tus mascotas reciban el cariño y cuidado que merecen, como si fueran parte de mi propia familia.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default CuidadoDomicilio;
