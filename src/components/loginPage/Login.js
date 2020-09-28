import React from 'react';
import './login.css';
import techMLogo from '../../asset/techm_logo.png';
import reactLogo from '../../asset/login_react_logo.png';
import uxmLogo from '../../asset/uxm_logo.png';
import { Container, Col, Row, Image } from 'react-bootstrap';

import Form from '../loginPage/login-form/Form'

function Login(props) {
    return (
        <div>
            <div className="bg-img" >
                <Container fluid >
                    <Row className="swaprow">
                        <Col md={1} />
                        <Col xs={6} md={3} className="my-3" style={{ textAlign: "left" }}>
                            <Image src={techMLogo} />
                        </Col>
                        <Col xs={9} md={6} className="mt-3 text-white" id="first-row">
                            <h5>REACT COMPONENT PORTAL </h5>
                        </Col>
                        <Col xs={2} md={1} className="mt-3" id="second-row" style={{ alignSelf: "center" }}>
                            <Image src={reactLogo} />
                        </Col >
                        <Col md={1} />
                    </Row>
                    <Row className="swaprow1">
                        <Col md={6} className="uxmLogo" id="first-row1">
                            <Image src={uxmLogo} style={{ margin: "auto" }} />
                        </Col>
                        <Col md={6} className="formItem" id="first-row2">
                            <Col md={9} className="p-0">
                                <Form props={props} />
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Login;