import React from "react";
import imghombre from "./../assets/hombre.jpg";
import imgmujer from "./../assets/mujer.jpeg";
import { Container, Card, Row } from "react-bootstrap";
import Piepagina from "./footer";

function Tarjetainicio(props) {
  return (
    <div>
    <Container>
      <Row xs={1} md={2} className="g-1">
        <a href="https://www.google.com">
          <Card>
            <Card.Img src={imghombre} alt="Card image" className="imagen" />
            <Card.ImgOverlay className="text_card">
              <Card.Title>
                <h1>hombre</h1>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </a>
        <a href="https://www.google.com">
          <Card>
            <Card.Img src={imgmujer} alt="Card image" className="imagen" />
            <Card.ImgOverlay className="text_card">
              <Card.Title>
                <h1>Mujer</h1>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </a>
      </Row>
    </Container>
    <Piepagina/>
    </div>
  );
}

export default Tarjetainicio;
