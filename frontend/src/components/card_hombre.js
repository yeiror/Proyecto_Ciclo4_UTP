
import React from "react";
import { Container, Card, Row, } from "react-bootstrap";

import cards from "./../json/card_hombre.json";
import Piepagina from "./../components/footer";

function Tarjetahombre(props) {
  return (
    <div>
      <Container>
        <Row xs={1} md={6} className="g-1">
          {cards.map((card) => (
            
              <Card>
                <Card.Img
                  src={card.image}
                  alt="Card image"
                  className="imagen"
                />
                <Card.ImgOverlay className="text_card">
                  <Card.Title>
                    <h1>{card.title}</h1>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            
          ))}
        </Row>
      </Container>

      <Piepagina />
    </div>
  );
}

export default Tarjetahombre;


