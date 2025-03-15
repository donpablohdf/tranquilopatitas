
import React from 'react';
import Card from 'react-bootstrap/Card';

function QuienSoy() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body className="d-flex flex-row-reverse p-0">
          <Card.Img 
            src="/imgs/quien-soy-mascotas-leon.webp"
            alt="Imagen de Quien Soy"
            className="ml-4"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
          />
          <div className="flex-grow-1 p-3">
            <h2>Quién soy</h2>
            <Card.Text>
              <p>Permíteme presentarme: soy Pablo, el fundador de TRANQUILOPATITAS, y desde siempre he tenido una conexión especial con los animales. Mi amor por las mascotas no solo es un interés personal, sino una verdadera vocación que me ha llevado a dedicar mi tiempo y energía a su bienestar. A través de estos servicios, busco crear un puente de confianza entre tú, tus peludos compañeros y yo, asegurándome de que siempre reciban la atención y el cariño que merecen.</p>

              <p>Mi amor por las mascotas comenzó hace años, cuando empecé a darme cuenta de lo importantes que son estos increíbles seres en la vida de las personas. Ya sea como compañeros incondicionales o como parte fundamental del hogar, las mascotas tienen un lugar especial en nuestros corazones. Fue entonces cuando decidí transformar esta pasión en una forma de vida, ofreciendo servicios que combinen amor y compromiso para garantizar su felicidad y tranquilidad.</p>

              <p>Mi enfoque se basa en brindar atención personalizada, adaptándome a sus rutinas, personalidades y requerimientos únicos. Además, valoro profundamente la relación de confianza que construyo con los dueños, sabiendo que me están confiando lo más importante: el bienestar de sus compañeros peludos.</p>

              <p>Más allá de ser un cuidador de mascotas, me considero un apasionado defensor de su felicidad y salud. Creo firmemente que cada mascota merece un entorno seguro, amoroso y respetuoso, y es por eso que he diseñado TRANQUILOPATITAS pensando en ellos. Mi objetivo es no solo cuidar a tus mascotas, sino también brindarte tranquilidad, sabiendo que están en manos de alguien que realmente se preocupa por su bienestar.</p>

              <p>Estoy emocionado de poder formar parte de la vida de tus compañeros peludos y de contribuir a su felicidad mientras tú estás ocupado. Si buscas a alguien confiable, responsable y con un amor genuino por los animales, ¡has llegado al lugar correcto! Espero conocerte pronto y trabajar juntos para hacer que cada día de tus mascotas sea especial. </p>

              <p>Gracias por considerar TRANQUILOPATITAS. Espero conocerte pronto y ser parte del bienestar de tu compañero peludo. ¡Hasta pronto!😊🐾</p>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </article>
  );
}

export default QuienSoy;
