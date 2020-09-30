import React from 'react';

import { Container, Col, Row, Nav } from 'react-bootstrap';

import Header from '../dashboard/header/Header';
import LeftNav from '../dashboard/left-navigation/LeftNav'
import Login from '../loginPage/Login'

function Layout(props) {
    return (
        <div className="maindiv">
            {window.location.pathname !== '/' ?
                <main>
                    <Header />
                    <Container fluid>
                        <Row>
                            <Col md={2} className="ml-0 p-0">
                                <LeftNav />
                            </Col>
                            <Col>
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                </main> :
                <Login />
            }
        </div>
    )
}

export default Layout;