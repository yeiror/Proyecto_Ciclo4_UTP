import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Piepagina from "./footer";

function Catalogomujer(props) {
    return (
    <div>
    
    <Row xs={1} md={4} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card>
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/skechers-4252-7036931-1-catalog-new.jpg" />
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
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/skechers-1199-2296931-1-catalog-new.jpg" />
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
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/skechers-0433-6705521-1-catalog-new.jpg" />
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
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/royal-county-of-berkshire-polo-club-4336-3789351-1-catalog-new.jpg" />
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
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/royal-county-of-berkshire-polo-club-2287-3489351-1-catalog-new.jpg" />
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
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/royal-county-of-berkshire-polo-club-8099-6458321-1-catalog-new.jpg" />
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
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/adidas-performance-1963-4327771-1-catalog-new.jpg" />
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
        <Card.Img variant="top" src="https://static.dafiti.com.co/p/royal-county-of-berkshire-polo-club-6831-5994741-1-catalog-new.jpg" />
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

export default Catalogomujer;