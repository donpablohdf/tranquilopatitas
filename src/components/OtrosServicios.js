
import React from 'react';
import Card from 'react-bootstrap/Card';

function OtrosServicios() {
  return (
    <article>
      <Card className="mb-4">
      <div className="d-flex flex-column flex-md-row">
        <Card.Img           
          src="/imgs/paseo-perros-mascotas-leon.webp" 
          alt="Paseo de perros en Leon" 
          className="imagen-responsiva"   
        />
        <Card.Body>
          <h3>Otros Servicios</h3>
          <h4 className="mb-2 text-muted">Cuidado de mascotas</h4>
          <Card.Text>
            
            <p></p>

            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </article>
  );
}

export default OtrosServicios;
