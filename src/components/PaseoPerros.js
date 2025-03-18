
import React from 'react';
import Card from 'react-bootstrap/Card';

function PaseoPerros() {
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
          <h3>Paseo de perros y paseos temáticos</h3>
          <h4 className="mb-2 text-muted">Cuidado de mascotas</h4>
          <Card.Text>
            <p>En <strong>TRANQUILOPATITAS</strong>, ofrezco un servicio personalizado de paseo de perros en León. Sé lo importante que es para ti que tu perro reciba ejercicio, estimulación mental y momentos de diversión. Por eso, estoy aquí para ser el compañero de aventuras diarias de tu perro, brindándole caminatas seguras, saludables y llenas de energía.</p>

            <p>Conozco los mejores lugares en León para disfrutar del aire fresco, desde parques arbolados hasta senderos tranquilos, donde tu perro podrá olfatear, correr y socializar en un entorno seguro y controlado.</p>        

            <h4 className="mb-2 text-muted">Paseos temáticos</h4>

            <p>Descubre nuestros <strong>Paseos Temáticos</strong>, diseñados para ofrecer experiencias únicas y refrescantes a tu mascota. Ya sea un relajante paseo por la <em>playa</em>, una aventura en las <em>montañas</em>, o un día de exploración en un <em>parque</em> lejos de su ciudad, cada salida está pensada para que tu peludo amigo disfrute al máximo mientras se conecta con la naturaleza.</p>

            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </article>
  );
}

export default PaseoPerros;
