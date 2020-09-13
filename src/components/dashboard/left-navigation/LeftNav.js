import React from 'react';
import {Container,Col,Row, Nav} from 'react-bootstrap';
import './leftnav.css'

function LeftNav(){
    return(
        <div>
            <Nav defaultActiveKey="/dashboard" className="flex-column left-navigation">
                        <Nav.Link to="/mobile">Mobile Number</Nav.Link>
                        <Nav.Link to="/email">Email id</Nav.Link>
                        <Nav.Link to="/alphanumeric">Alphanumeric</Nav.Link>
                        <Nav.Link to="/alphanumeric">Autocomplete</Nav.Link>
                        <Nav.Link to="/alphanumeric">TypeHead</Nav.Link>
                        <Nav.Link to="/alphanumeric">Checkbox</Nav.Link>
                        <Nav.Link to="/alphanumeric">Date Picker</Nav.Link>
                        <Nav.Link to="/alphanumeric">Check box</Nav.Link>
                        <Nav.Link to="/alphanumeric">Radio Button</Nav.Link>
                        <Nav.Link to="/alphanumeric">Type Ahead</Nav.Link>
                        <Nav.Link to="/alphanumeric">Drop down</Nav.Link>
                        <Nav.Link to="/alphanumeric">Message box</Nav.Link>

                    </Nav>
            {/* <Container fluid>
                <Row>
                    <Col md={2} className="ml-5 p-0 left-navigation">
                    <Nav defaultActiveKey="/dashboard" className="flex-column">
                        <Nav.Link to="/mobile">Mobile Number</Nav.Link>
                        <Nav.Link to="/email">Email id</Nav.Link>
                        <Nav.Link to="/alphanumeric">Alphanumeric</Nav.Link>
                        <Nav.Link to="/alphanumeric">Autocomplete</Nav.Link>
                        <Nav.Link to="/alphanumeric">TypeHead</Nav.Link>
                        <Nav.Link to="/alphanumeric">Checkbox</Nav.Link>
                        <Nav.Link to="/alphanumeric">Contact Us</Nav.Link>
                        <Nav.Link to="/alphanumeric">Date Picker</Nav.Link>
                        <Nav.Link to="/alphanumeric">Check box</Nav.Link>
                        <Nav.Link to="/alphanumeric">Radio Button</Nav.Link>
                        <Nav.Link to="/alphanumeric">Type Ahead</Nav.Link>
                        <Nav.Link to="/alphanumeric">Drop down</Nav.Link>
                        <Nav.Link to="/alphanumeric">Message box</Nav.Link>

                    </Nav>
                    </Col>
                </Row>
            </Container> */}
        </div>
    )
}

export default LeftNav;