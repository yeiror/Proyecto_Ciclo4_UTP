import logo from './assets/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {MDBIcon, MDBBadge} from 'mdb-react-ui-kit';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg"  sticky="top">
  <Container fluid>
  <Navbar.Brand href="#home" className='mb-0 h2' >
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      SNEAKER STORE
      </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-center" >
        <Nav.Link href="#hombre">Hombre</Nav.Link>
        <Nav.Link href="#mujer">Mujer</Nav.Link>
        <Nav.Link href="#buscar">|Buscar <MDBIcon fas icon="search" />|</Nav.Link>
        <Nav.Link href="#carro_compras"><MDBIcon fas icon='shopping-cart'></MDBIcon>
              <span>
              <MDBBadge pill color='danger'>!</MDBBadge>
              </span></Nav.Link>
        <Nav.Link href="#sesion">Iniciar Sesión</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    
    </div>
  );
}

export default App;
