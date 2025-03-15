
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
          <h3>Paseo de perros</h3>
          <h4 className="mb-2 text-muted">Cuidado de mascotas</h4>
          <Card.Text>
            <p>En TRANQUILOPATITAS, ofrezco un servicio personalizado de paseo de perros en León, diseñado para que tus compañeros peludos disfruten al máximo de su tiempo al aire libre. Sé lo importante que es para ti que tu perro reciba ejercicio, estimulación mental y momentos de diversión, incluso cuando tu agenda no te permite acompañarlo. Por eso, estoy aquí para ser el compañero de aventuras diarias de tu perro, brindándole caminatas seguras, saludables y llenas de energía.</p>

            <p>Mi enfoque está en adaptarme a las necesidades individuales de cada perro. Ya sea un perro activo que necesita largas caminatas para quemar energía o uno más tranquilo que prefiere explorar a su propio ritmo, me aseguro de que cada paseo sea una experiencia positiva y enriquecedora. Conozco los mejores lugares en León para disfrutar del aire fresco, desde parques arbolados hasta senderos tranquilos, donde tu perro podrá olfatear, correr y socializar en un entorno seguro y controlado.</p>

            <p>Durante los paseos, no solo me enfoco en el ejercicio físico, sino también en el bienestar emocional de tu mascota. Me tomo el tiempo de conectar con él, reforzar su confianza y asegurarme de que se sienta cómodo en todo momento. Además, llevo agua fresca, golosinas y accesorios necesarios para garantizar su comodidad y seguridad durante la caminata. Si tienes preferencias específicas, como rutas particulares o horarios, adapto completamente el servicio a tus indicaciones para que sea personalizado y confiable.</p>

            <p>Entiendo que dejar a tu perro en manos de alguien más puede ser un momento delicado, por lo que mantengo una comunicación cercana contigo. Después de cada paseo, recibirás actualizaciones sobre cómo fue su experiencia: fotos, videos o un breve resumen de su comportamiento, estado de ánimo y actividades realizadas. Quiero que estés tranquilo sabiendo que tu compañero está disfrutando de su tiempo al aire libre con alguien que realmente se preocupa por su felicidad.</p>

            <p>Espero convertirme en el compañero de paseo de tu perro y de descubrir juntos los rincones más hermosos de León. Mi objetivo es que cada caminata sea más que un simple paseo: una oportunidad para que tu perro explore, se ejercite y viva experiencias positivas que contribuyan a su bienestar integral. ¡Espero conocerte pronto y formar parte de las aventuras diarias de tu peludo amigo! 😊🐾</p>

            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </article>
  );
}

export default PaseoPerros;
