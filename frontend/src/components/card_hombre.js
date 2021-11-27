import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Piepagina from "./footer";
import cards from "../json/card_hombre.json"

function Catalogohombre(props) {
    return (
    <div>
    
    <Row xs={1} md={4} className="g-4">
    {cards.map((card) =>(
    <Col>
        <Card>
        <Card.Img variant="top" src={card.imagen} />
        <Card.Body>
            <Card.Title>{card.titulo}</Card.Title>
            <Card.Text>
            <Button className="ButtonTalla" variant="info">{card.talla1}</Button>
            <Button variant="info">{card.talla2}</Button>
            <Button variant="info">{card.talla3}</Button>
            <Button variant="info">{card.talla4}</Button>
            ${card.precio}
            </Card.Text>
            <Button variant="primary">Agrega al carrito</Button>
        </Card.Body>
        </Card>
    </Col>

    ))}
    </Row>
    
    <Piepagina/>
    </div>
    );
}

export default Catalogohombre;