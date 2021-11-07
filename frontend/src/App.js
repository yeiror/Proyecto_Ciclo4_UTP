import logo from "./assets/logo.png";
import imghombre from "./assets/hombre.jpg";
import imgmujer from "./assets/mujer.jpeg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Container, Nav, Navbar, Card, Row, NavLink } from "react-bootstrap";
import { MDBIcon, MDBBadge } from "mdb-react-ui-kit";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home" className="mb-0 h2">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            SNEAKER STORE
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link href="#hombre">Hombre</Nav.Link>
              <Nav.Link href="#mujer">Mujer</Nav.Link>
              <Nav.Link href="#buscar">
                |Buscar <MDBIcon fas icon="search" />|
              </Nav.Link>
              <Nav.Link href="#carro_compras">
                <MDBIcon fas icon="shopping-cart"></MDBIcon>
                <span>
                  <MDBBadge pill color="danger">
                    !
                  </MDBBadge>
                </span>
              </Nav.Link>
              <Nav.Link href="#sesion">Iniciar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
    </div>
  );
}

export default App;
