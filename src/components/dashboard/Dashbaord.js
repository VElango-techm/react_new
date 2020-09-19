import React from 'react';
import './dashboard.css';

import { Container, Col, Row, Nav } from 'react-bootstrap';

import Header from '../dashboard/header/Header';
import LeftNav from '../dashboard/left-navigation/LeftNav'
import Main from './main/Main'

function Dashboard(props) {
    return (
        <main>
            <div style={{ backgroundColor: '#1D2025' }}>
                <Header />
                <Container fluid>
                    <Row>
                        <Col md={2} className="ml-0 p-0">
                            {/* <LeftNav /> */}
                        </Col>
                        <Col>
                            {props.children}
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    )
}

export default Dashboard;
