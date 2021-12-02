import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { APIHOST as host } from '../app.json';
import axios from 'axios';
import './login.css'
import { isNull } from 'util';
import Cookies from 'universal-cookie';
import { calculaExtraccionSesion } from './helper/helper'

const cookies = new Cookies();

export default class login extends React.Component {
    constructor(props){
        super(props);
        
    this.state = {
        usuario: '',
        pass:'',
    };
}
    iniciarSesion(){
      axios.post(`${host}/login`,{
        usuario:this.state.usuario,
        pass:this.state.pass
      })
      .then((response)=>{
        if(isNull(response.data.token)){
          alert('Usuario y/o contraseña inválidos');
        }
        else{
          cookies.set('_s', response.data.token,{
            path:'/',
            expires: calculaExtraccionSesion(),
          })

        }
        console.log(response);
      })
      .catch((err)=>{
        console.log(err);
      })
        
    }

render(){
    return (
    <div class="login" >
      <Container id="login-container" >
        <Row>
          <Col>
            <Row>
                <div id="title-form"><h2>Iniciar Sesión</h2></div>
            </Row>
            <Row>
                <Col
                    sm="12"
                    xs="12"
                    md={{ span:4, offset:4 }}
                    lg={{ span:4, offset:4 }}
                    xl={{ span:4, offset:4 }}
                >
              <Form>
                <Form.Group>
                  <Form.Label >
                    Usuario
                  </Form.Label>
                  <Form.Control 
                  onChange={(e) =>
                    this.setState({ usuario: e.target.value })
                }  
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label >Contraseña</Form.Label>
                  <Form.Control type="password" 
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>

                <Button variant="primary" 
                    onClick = { ()=>{
                        this.iniciarSesion();
                    }}
                >
                  Iniciar sesión
                </Button>
              </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
}

