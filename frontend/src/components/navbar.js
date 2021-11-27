import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { MDBIcon, MDBBadge } from "mdb-react-ui-kit";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";

export function Barranavegacion(props) {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="mb-0 h2">
          <Link to="/">
            <img
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
            <NavLink>
              <Link to="/Login" className="color_link">
                Iniciar Sesion
              </Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
