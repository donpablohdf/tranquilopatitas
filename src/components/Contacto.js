import React from 'react';
import Card from 'react-bootstrap/Card';

function Contacto() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body>
          <h3>Contacto</h3>
          <Card.Text>
            <p>Email: <a href="tranquilopatitas@gmail.com">tranquilopatitas@gmail.com</a></p>
            <p>Teléfono: <a href="tel:+34669810978">+34 669810978</a></p>
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default Contacto;
