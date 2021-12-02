import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Link } from "react-router-dom";

import logo from "./assets/logo.png";
import {
  Container,
  Nav,
  Navbar,
  NavLink,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";
import { MDBIcon, MDBBadge } from "mdb-react-ui-kit";

import Tarjetainicio from "./components/card_inicio";
import Catalogohombre from "./components/card_hombre";
import Catalogomujer from "./components/card_mujer";
import Login from "./components/login";
import './components/navbar.css';



function App() {
  return (
    <div className="App">
      <Navbar id="navbar" bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="mb-0 h2">
            <Link to="/">
              <img
                alt=""
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </Link>{" "}
            <Link to="/"> SNEAKER STORE</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink>
                <Link to="/Hombre" className="color_link">
                  Hombre
                </Link>
              </NavLink>
              <NavLink>
                <Link to="Mujer" className="color_link">
                  Mujer
                </Link>
              </NavLink>

              <NavLink>
                <Link to="/Ventas" className="color_link">
                  {" "}
                  <MDBIcon fas icon="shopping-cart"></MDBIcon>
                  <span>
                    <MDBBadge pill color="danger">
                      !
                    </MDBBadge>
                  </span>
                </Link>
              </NavLink>
              {/* <NavLink><Link to="/Login" className="color_link">Iniciar Sesion</Link></NavLink>*/}
              <DropdownButton id="dropdown-basic-button" title="Usuario">
                 <Dropdown.Header id="dropdown-header">
                   
                    <Row>
                      #USUARIO
                    </Row>
                  </Dropdown.Header>
                  <Dropdown.Divider/>
                <Dropdown.Item href="#/action-1">
                  <Link to="/Login" className="color_link">
                    Iniciar Sesión
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">Crear cuenta</Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Tarjetainicio />} />
        <Route path="/Hombre" element={<Catalogohombre />} />
        <Route path="/Mujer" element={<Catalogomujer />} />
        {/* <Route path="/Ventas" element={<Ventas/>}/> */}
        {<Route path="/Login" element={<Login />} />}
      </Routes>
    </div>
  );
}

export default App;
