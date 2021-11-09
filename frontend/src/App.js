import logo from "./assets/logo.png";
import imghombre from "./assets/hombre.jpg";
import imgmujer from "./assets/mujer.jpeg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Container, Nav, Navbar, Card, Row, NavLink } from "react-bootstrap";
import {
  MDBIcon,
  MDBBadge,
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
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
            <Nav className="mx-auto">
              <NavLink href="#hombre">Hombre</NavLink>
              <NavLink href="#mujer">Mujer</NavLink>
              <NavLink href="#buscar">
                |Buscar <MDBIcon fas icon="search" />|
              </NavLink>
              <NavLink href="#carro_compras">
                <MDBIcon fas icon="shopping-cart"></MDBIcon>
                <span>
                  <MDBBadge pill color="danger">
                    !
                  </MDBBadge>
                </span>
              </NavLink>
              <NavLink href="#sesion">Iniciar Sesión</NavLink>
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

      <MDBFooter
        bgColor="dark"
        className="text-success text-center text-lg-left"
      >
        <MDBContainer className="p-4">
          <MDBRow className="footer">
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-success">
                    <MDBIcon fab icon="facebook-square" /> <span />
                    <MDBIcon fab icon="instagram" /> <span />
                    <MDBIcon fab icon="twitter" /> <span />
                    <MDBIcon fab icon="whatsapp" /> <span />
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-success">
                    Cel: +57 200 500 1000
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-success">
                    PBX: 01 8000 91 38 27
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-success">
                    Envios
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-success">
                    Cambios y garantias
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-success">
                    Contactanos
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-success">
                    Termino y condiciones
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-success">
                    Trabaja con nosotros
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright :{" "}
          <a className="text-success" href="link">
            UTP SNEAKER STORE S.A.S
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default App;
