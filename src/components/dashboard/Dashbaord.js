import React from 'react';
import './dashboard.css';

import {Container,Col,Row, Nav} from 'react-bootstrap';

import Header from '../dashboard/header/Header';
import LeftNav from '../dashboard/left-navigation/LeftNav'
import Main from './main/Main'

function Dashboard(){
    return(
        <div style={{backgroundColor: '#1D2025'}}>
            <Header />
            <Container fluid>
            <Row>
                <Col md={2} className="ml-0 p-0">
                    <LeftNav />
                </Col>
                <Col>
                     <Main />
                </Col>
            </Row>
            </Container>
            
        </div>
    )
}

export default Dashboard;
