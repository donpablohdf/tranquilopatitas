import React from 'react';
import Card from 'react-bootstrap/Card';

function QuienSoy() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body>
          <h2>Quién soy</h2>
          <Card.Text>
            <p>La misión de TRANQUILOPATITAS es ofrecer un servicio excepcional y personalizado para nuestros amigos peludos y sus familias.</p>
            <p>Desde pequeño, siempre he sentido una conexión especial con los animales. Al crecer, me di cuenta de que mi amor por ellos podría convertirse en algo más que solo un pasatiempo. Así nació TRANQUILOPATITAS, una experiencia donde cada cliente, grande o pequeño, recibe atención y cariño como si fuera parte de mi propia familia.</p>
            <p>Tu confianza es nuestra motivación, y estamos aquí para garantizar que cada experiencia sea inolvidable para ti y tu mascota.</p>
            <p>Gracias por considerar TRANQUILOPATITAS. Espero conocerte pronto y ser parte del bienestar de tu compañero peludo. ¡Hasta pronto!</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default QuienSoy;
