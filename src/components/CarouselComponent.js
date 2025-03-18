import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Arreglo de rutas de imágenes
const rutasImagenes = [
  '/path/to/your/image1.jpg',
  '/path/to/your/image2.jpg',
  '/path/to/your/image3.jpg',
  // Puedes agregar más rutas de imágenes aquí
];

const CarouselComponent = () => {
  return (
    <Carousel>
      {rutasImagenes.map((ruta, index) => (
        <Carousel.Item key={index} interval={1000}>
          <img
            className="d-block w-100"
            src={ruta}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h3>Slide {index + 1}</h3>
            <p>Descripción del slide {index + 1}.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;