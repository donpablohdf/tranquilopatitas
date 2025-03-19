
import React from 'react';
import Card from 'react-bootstrap/Card';

function QuienSoy() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body className="d-flex flex-column flex-md-row p-0">
          
          <div className="flex-grow-1 p-3">
            <h2>Quién soy</h2>
            <h4 className="mb-2 text-muted">Cuidado de mascotas en León</h4>

            <Card.Text>
              <p>Hola soy Pablo, el fundador de <strong>TRANQUILOPATITAS</strong>, mi amor por las mascotas no solo es un interés personal, sino una verdadera vocación que me ha llevado a dedicar mi tiempo y energía a su bienestar. A través de estos servicios, busco crear un puente de confianza entre tú, tus peludos compañeros y yo, asegurándome de que siempre reciban la atención y el cariño que merecen.</p>

              <p>Ya sea como compañeros incondicionales o como parte fundamental del hogar, las mascotas tienen un lugar especial en nuestros corazones. Por eso ofrezco servicios que combinan amor y compromiso para garantizar su felicidad y tranquilidad.</p>

              <p>Mi enfoque se basa en brindar atención personalizada, adaptándome a sus rutinas, personalidades y requerimientos únicos. Además, valoro profundamente la relación de confianza que construyo con los dueños, sabiendo que me están confiando lo más importante: <strong>el bienestar de sus compañeros peludos.</strong></p>
            
            </Card.Text>
            
          </div>
          <Card.Img            
            src="/imgs/quien-soy-mascotas-leon.webp"
            alt="Cuidado de mascotas en León"
            className="imagen-responsiva"
          />
        </Card.Body>
      </Card>
    </article>
  );
}

export default QuienSoy;
