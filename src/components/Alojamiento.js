
import React from 'react';
import Card from 'react-bootstrap/Card';

function Alojamiento() {
  return (
    <article>
      <Card className="mb-4">
      <div className="d-flex flex-column flex-md-row">
          <Card.Img            
            src="/imgs/alojamiento-mascotas-leon.webp"
            alt="Imagen de Alojamiento"
            className="imagen-responsiva"            
          />
          <Card.Body>
            <h3>Alojamiento de mascotas</h3>
            <h4 className="mb-2 text-muted">Cuidado de mascotas nocturno en mi casa</h4>

            <Card.Text>
              <p>Si buscas un lugar donde tu mascota pueda pasar la noche en un ambiente cálido y seguro, has llegado al lugar indicado. Ofrezco un servicio de cuidado nocturno personalizado, realizado desde mi propio hogar, para que tu peludo amigo se sienta como en casa mientras tú descansas.</p>

              <p>Desde siempre, los animales han sido una gran pasión en mi vida. Mi conexión con ellos me inspiró a crear este espacio dedicado a su bienestar, donde cada mascota recibe atención personalizada y cuidados pensados para garantizar su comodidad. En mi hogar, me aseguro de que todas las necesidades de tus peludos amigos estén cubiertas, brindándoles un entorno seguro y actividades que los mantengan tranquilos y felices durante toda la noche.</p>

              <p>Mi prioridad es que tus compañeros peludos disfruten de un espacio cómodo, con zonas dedicadas tanto para jugar <strong>(dispongo de un amplio patio privado y cerrado) </strong>como para descansar. Además, me aseguro de que sigan sus rutinas habituales de comida y cuidado, ofreciéndoles todo el cariño que necesitan. Sabemos lo importantes que son para ti, por eso te puedo enviar fotos y mensajes para que siempre estés al tanto de cómo están pasando la noche.</p>

              <p>Estoy emocionado de abrir las puertas de mi hogar a tus mascotas y hacerlas sentir como parte de mi familia. Juntos podemos garantizar que tus amigos peludos vivan noches llenas de amor y comodidad. ¡Espero conocerte pronto y formar parte de sus momentos especiales! 😊🐾</p>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </article>
  );
}

export default Alojamiento;
