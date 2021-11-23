import React from "react";
import {
  MDBIcon,
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Piepagina(props) {
  return (
    <MDBFooter bgColor="dark" className="text-success text-center text-lg-left">
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
  );
}

export default Piepagina;
