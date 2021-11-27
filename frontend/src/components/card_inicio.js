import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import cards from "./../json/card_inicio.json";
import Piepagina from "./../components/footer";

function Tarjetainicio(props) {
  return (
    <div>
      <Container>
        <Row xs={1} md={2} className="g-1">
          {cards.map((card) => (
            <Link to={card.link}>
              <Card>
                <Card.Img
                  src={card.image}
                  alt="Card image"
                />
                <Card.ImgOverlay className="text_card">
                  <Card.Title>
                    <h1>{card.title}</h1>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Link>
          ))}
        </Row>
      </Container>

      <Piepagina />
    </div>
  );
}

export default Tarjetainicio;
