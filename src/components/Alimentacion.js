
import React from 'react';
import Card from 'react-bootstrap/Card';

function Alimentacion() {
  return (
    <article>
      <Card className="mb-4">
        <div className="d-flex flex-column flex-md-row">
          <Card.Img
            src="/imgs/comida-domicilio-mascotas-leon.webp"
            alt="Comida mascotas Leon"
            className="imagen-responsiva"
          />
          <Card.Body>
            <h3>Alimentación de mascotas</h3>
            <h4 className="mb-2 text-muted">¿Quieres consentir a tu mascota con comida casera y nutritiva?</h4>

            <Card.Text>
              <p>En <strong>TRANQUILOPATITAS</strong>, preparamos recetas caseras y te las llevamos a casa para darle un capricho a tu mascota. Cada receta está diseñada para complementar la dieta de tu peludo y mantenerlo feliz y saludable.</p>

              <p><strong>Ejemplos:</strong></p>
              <ul>
                <li><strong>Para perros:</strong> Pollo cocido desmenuzado + arroz integral + zanahoria rallada (¡sin cebolla ni ingredientes tóxicos!).</li>
                <li><strong>Para gatos:</strong> Salmón al vapor + calabaza asada + un toque de hierbas aromáticas (siempre sin ajo ni cebolla).</li>
              </ul>              

              <p>¿Necesitas una receta personalizada para las necesidades específicas de tu mascota? ¡Cuéntame más y juntos crearemos un menú ideal! 🐾</p>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </article>
  );
}

export default Alimentacion;
