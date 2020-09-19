import React from 'react';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import './leftnav.css'
import { Link } from "react-router-dom";

function LeftNav() {
    return (
        <div>
            <Nav className="flex-column left-navigation">
                <Link
                    to={{
                        pathname: '/mobile'
                    }}>
                    Mobile Number
                </Link>

                <Link
                    to={{
                        pathname: '/alphanumeric'
                    }}>
                    Alphanumeric
                </Link>
                {/* <Nav.Link to="/mobile" >Mobile Number</Nav.Link>
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
                        <Nav.Link to="/alphanumeric">Message box</Nav.Link> */}

            </Nav>

        </div>
    )
}

export default LeftNav;