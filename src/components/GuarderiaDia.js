import React from 'react';
import Card from 'react-bootstrap/Card';

function GuarderiaDia() {
  return (
    <article>
      <Card className="mb-4">
        <Card.Body className="d-flex flex-column flex-md-row p-0">
          <div className="flex-grow-1 p-3">
            <h3>Guardería de día</h3>
            <h4 className="mb-2 text-muted">Cuidado de mascotas diurno en mi propio hogar</h4>
            <Card.Text>
              <p>En <strong>TRANQUILOPATITAS</strong>, ofrecemos un servicio de guardería diurna para mascotas en un entorno acogedor y seguro: ¡mi propio hogar! Sabemos lo importante que es para ti asegurarte de que tus compañeros peludos estén bien atendidos durante el día mientras tú estás ocupado. Por eso, hemos creado un espacio diseñado especialmente para que tus mascotas disfruten, jueguen y descansen como si estuvieran en su propio hogar.</p>

              <p>Mi casa es un refugio pensado para brindar comodidad y diversión a las mascotas. Desde áreas amplias para correr y jugar <strong>(dispongo de un amplio patio privado y cerrado)</strong>, hasta rincones tranquilos para relajarse, cada detalle está cuidadosamente planificado para garantizar su bienestar. Aquí, tu perro o gato no solo encontrará un lugar donde pasar el día, sino también una segunda familia que los recibirá con cariño y atención personalizada. Nos encargamos de que cada momento sea especial, adaptándonos a sus necesidades individuales y asegurándonos de que siempre se sientan queridos.</p>

              <p>Nos aseguramos de que sigan sus rutinas habituales de alimentación, descanso y paseos, proporcionándoles todo lo necesario para que se sientan como en casa. La seguridad y el bienestar son nuestra prioridad absoluta, y por eso mantenemos un entorno limpio, seguro y lleno de amor.</p>

              <p>Entendiendo que dejar a una mascota durante el día puede ser un momento delicado, por lo que mantendré comunicación constante contigo. A través de fotos y actualizaciones regulares, podrás ver lo bien que lo está pasando y relajarte sabiendo que está en buenas manos. El objetivo es que tanto tú como tu mascota os sintáis a gusto en el servicio, sabiendo que su felicidad es la mayor prioridad.</p>

              <p>Me encantaría abrir las puertas de mi hogar a tus peludos amigos y hacerlos sentir parte de nuestra pequeña comunidad de cuatro patas. Mi misión es ofrecer un servicio que combine cuidado profesional, cariño sincero y diversión garantizada, para que cada día sea una experiencia positiva para ellos y para ti. ¡Espero conocerte pronto y darle a tu mascota días llenos de alegría y buenos momentos! 😊🐾</p>
            </Card.Text>
          </div>
          <Card.Img 
            src="/imgs/guarderia-de-dia-mascotas-leon.webp"
            alt="Guardería de día mascotas Leon"
            className="imagen-responsiva"  
          />
        </Card.Body>
      </Card>
    </article>
  );
}

export default GuarderiaDia;