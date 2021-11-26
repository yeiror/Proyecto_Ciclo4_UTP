import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Piepagina from "./footer";

function Catalogohombre(props) {
    return (
    <div>
    
    <Row xs={1} md={4} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card>
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/adidas-performance-7474-7426621-1-catalog-new.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            <Button className="ButtonTalla" variant="info">34</Button>
            <Button variant="info">36</Button>
            <Button variant="info">38</Button>
            $230.000
            </Card.Text>
            <Button variant="primary">Agrega al carrito</Button>
        </Card.Body>
        </Card>
    </Col>
    ))}


{Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card>
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/royal-county-of-berkshire-polo-club-8248-3405741-1-catalog-new.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            <Button className="ButtonTalla" variant="info">34</Button>
            <Button variant="info">36</Button>
            <Button variant="info">38</Button>
            $230.000
            </Card.Text>
            <Button variant="primary">Agrega al carrito</Button>
        </Card.Body>
        </Card>
    </Col>
    ))}

{Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card>
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/adidas-performance-5683-2596921-1-catalog-new.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            <Button className="ButtonTalla" variant="info">34</Button>
            <Button variant="info">36</Button>
            <Button variant="info">38</Button>
            $230.000
            </Card.Text>
            <Button variant="primary">Agrega al carrito</Button>
        </Card.Body>
        </Card>
    </Col>
    ))}


{Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card>
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/under-armour-3219-2617941-1-catalog-new.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            <Button className="ButtonTalla" variant="info">34</Button>
            <Button variant="info">36</Button>
            <Button variant="info">38</Button>
            $230.000
            </Card.Text>
            <Button variant="primary">Agrega al carrito</Button>
        </Card.Body>
        </Card>
    </Col>
    ))}
    </Row>

    <Row xs={1} md={4} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card>
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/tellenzi-2448-4361141-1-catalog-new.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            <Button className="ButtonTalla" variant="info">34</Button>
            <Button variant="info">36</Button>
            <Button variant="info">38</Button>
            $230.000
            </Card.Text>
            <Button variant="primary">Agrega al carrito</Button>
        </Card.Body>
        </Card>
    </Col>
    ))}


{Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card>
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/asics-3090-7447171-1-catalog-new.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            <Button className="ButtonTalla" variant="info">34</Button>
            <Button variant="info">36</Button>
            <Button variant="info">38</Button>
            $230.000
            </Card.Text>
            <Button variant="primary">Agrega al carrito</Button>
        </Card.Body>
        </Card>
    </Col>
    ))}

{Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card>
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/treme-2381-3890771-1-catalog-new.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            <Button className="ButtonTalla" variant="info">34</Button>
            <Button variant="info">36</Button>
            <Button variant="info">38</Button>
            $230.000
            </Card.Text>
            <Button variant="primary">Agrega al carrito</Button>
        </Card.Body>
        </Card>
    </Col>
    ))}


{Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card>
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/nike-3737-7810841-1-catalog-new.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            <Button className="ButtonTalla" variant="info">34</Button>
            <Button variant="info">36</Button>
            <Button variant="info">38</Button>
            $230.000
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