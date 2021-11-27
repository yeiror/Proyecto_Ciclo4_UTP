import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


import cards from "./../card.json";

export function Trajetasinicio1() {
  return (
    <Container>
      <Row xs={1} md={2} className="g-1">
        {cards.map((card) => (
            <Link to="/">
            <Card>
              <Card.Img src={card.image} alt="Card image" className="imagen" />
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
  );
}

export default Trajetasinicio1;
