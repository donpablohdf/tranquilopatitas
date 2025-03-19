
import React from 'react';
import Card from 'react-bootstrap/Card';

function Section({ title, subtitle, imageSrc, imageAlt, content }) {
  return (
    <article>
      <Card className="mb-4">
        <div className="d-flex flex-column flex-md-row">
          <Card.Img
            src={imageSrc}
            alt={imageAlt}
            className="imagen-responsiva"
          />
          <Card.Body>
            <h3>{title}</h3>
            <h4 className="mb-2 text-muted">{subtitle}</h4>
            <Card.Text>
              {content}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </article>
  );
}

export default Section;
