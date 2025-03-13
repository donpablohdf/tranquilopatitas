import React from 'react';
import Card from 'react-bootstrap/Card';

function VisitasDomicilio() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body>
          <h3>Visitas a domicilio</h3>
          <h4 className="mb-2 text-muted">Cuidado de mascotas en la casa del dueño</h4>
          <Card.Text>
            <p>Imagina que tu mascota recibe una experiencia personalizada que transforma su día a día mientras tú estás fuera, y yo soy su compañero de aventuras que llena su tiempo de juegos y cariño en la comodidad de tu hogar.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default VisitasDomicilio;
