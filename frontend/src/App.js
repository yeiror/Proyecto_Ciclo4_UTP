
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import {Routes, Route, Link } from "react-router-dom";

import logo from "./assets/logo.png";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { MDBIcon, MDBBadge } from "mdb-react-ui-kit";

import Tarjetainicio from "./components/card_inicio";
import Catalogohombre from "./components/card_hombre";
import Catalogomujer from "./components/card_mujer";

function App() {
  return (
    
    <div className="App">
      <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="mb-0 h2">
        <Link to="/"><img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          </Link>{" "}
          SNEAKER STORE
          
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink ><Link to="/Hombre" className="color_link">Hombre</Link></NavLink>
            <NavLink ><Link to="Mujer" className="color_link">Mujer</Link></NavLink>
            
            <NavLink><Link to="/Ventas" className="color_link"> <MDBIcon fas icon="shopping-cart"></MDBIcon>
              <span>
                <MDBBadge pill color="danger">
                  !
                </MDBBadge>
              </span></Link>
            
            </NavLink>
            <NavLink><Link to="/Login" className="color_link">Iniciar Sesion</Link></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    

    <Routes>
      <Route path="/" element={<Tarjetainicio/>}/>
      <Route path="/Hombre" element={<Catalogohombre/>}/>
      <Route path="/Mujer" element={<Catalogomujer/>}/>
      {/* <Route path="/Ventas" element={<Ventas/>}/> */}
      {/* <Route path="/Login" element={<Login/>}/> */}

        

    </Routes>
    

    </div>
   
   
    
  );
}

export default App;
