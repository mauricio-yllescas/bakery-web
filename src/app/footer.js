import React, {Component} from "react";

import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobilePhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';

import logo from './img/default.png';

import './footer.css';

class Footer extends Component {
    state = {

    }

    render = () => {
        return (
            <React.Fragment>
                <Container className="footer-bg">
                    <Row className="justify-content-md-center pd-height ft-font">
                        <Col>
                            <a href={this.props.homeURL} target='_blank' rel='noreferrer' style={{cursor: 'pointer'}}>
                                <Image 
                                    src={logo} 
                                    alt={'home'}
                                    className='img-resize'
                                    roundedCircle={true}
                                    fluid={true}
                                >
                                </Image>
                            </a>
                        </Col>
                        <Col>
                            <h3>Cliente</h3>
                            <span>Mi cuenta</span>
                            <br></br>
                            <span>Pedidos</span>
                            <br></br>
                            <span>Carrito de compra</span>
                            <br></br>
                            <span>Finalizar compra</span>
                        </Col>
                        <Col>
                            <h3>Información</h3>
                            <span>Nosotros</span>
                            <br></br>
                            <span>Galería</span>
                            <br></br>
                            <span>Contáctanos</span>
                        </Col>
                        <Col>
                            <h3>Contáctanos</h3>
                            <FontAwesomeIcon icon={faMobilePhone}/><span> +(51) 992-645-146</span>
                            <br></br>
                            <FontAwesomeIcon icon={faMailBulk}/><span> yllescas168@gmail.com</span>
                        </Col>
                    </Row>
                    <Row className="pd-height ft-font">
                        <Col>
                            <span>© 2022 MY. Todos los Derechos Reservados.</span> 
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faCreditCard} /> 
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    };
}

export default Footer;