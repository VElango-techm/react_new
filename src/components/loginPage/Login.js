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
            <div className="bg-img">
                <Container fluid>
                    <Row>
                        <Col md={1} />
                        <Col xs={6} md={3} className="mt-3" style={{ textAlign: "left" }}>
                            <Image src={techMLogo} />
                        </Col>
                        <Col xs={6} md={6} className="mt-4 text-white" style={{ textAlign: "right" }}>
                            <h5>REACT COMPONENT PORTAL</h5>
                        </Col>
                        <Col xs={12} md={1} className="mt-3" style={{ textAlign: "left" }}>
                            <Image src={reactLogo} />
                        </Col>
                        <Col md={1} />
                    </Row>
                    <Row>
                        <Col md={6} className="uxmLogo">
                            <Image src={uxmLogo} style={{ marginLeft: "17%", marginTop: "10%" }} />
                        </Col>
                        <Col md={4} className="formItem">
                            <Form props={props} />
                        </Col>
                        <Col md={2} />
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Login;