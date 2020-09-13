import React from 'react';
import {Container,Col,Row, Image} from 'react-bootstrap';
import techMLogo from '../../../asset/techm_logo.png';
import reactLogo from '../../../asset/login_react_logo.png';
import uxmLogo from '../../../asset/uxm_logo_sm.png';
import { FaSearch, FaUserCircle, FaAngleDown, FaToggleOn } from 'react-icons/fa'

function Header(){
    return(
        <div style={{backgroundColor: '#1D2025', borderBottom:'1px solid grey', paddingBottom:'7px'}}>
                {/* <Col md={2} className="ml-5 mt-3 p-0 border-right text-left">
                        <Image src={techMLogo} />
                    </Col>
                    <Col md={4} className="mt-3 text-white text-left">
                        <Image src={reactLogo} className="float-left mr-2"/>
                        <p className="mt-2">REACT COMPONENT PORTAL</p>
                    </Col>
                    <Col md={2} className="mt-4 text-white text-right">
                        <FaSearch size={25} /> Search Component
                    </Col>
                    <Col md={3} className="mt-3 text-white text-right" >
                        <FaUserCircle size={25}/>
                        <FaAngleDown className="mr-4" />
                        <Image src={uxmLogo} className="mr-4" />
                        <FaToggleOn size={25}/>
                    </Col> */}
            <Container fluid>
                <Row>
                    <Col md={2} className="ml-0 mt-3 border-right text-left">
                        <Image src={techMLogo} />
                    </Col>
                    <Col md={4} className="mt-3 text-white text-left">
                        <Image src={reactLogo} className="float-left mr-2"/>
                        <p className="mt-2">REACT COMPONENT PORTAL</p>
                    </Col>
                    <Col md={3} className="mt-4 text-white text-left">
                        <FaSearch size={25} /> Search Component
                    </Col>
                    <Col md={3} className="mt-3 text-white text-right" >
                        <FaUserCircle size={25}/>
                        <FaAngleDown className="mr-4" />
                        <Image src={uxmLogo} className="mr-4" />
                        <FaToggleOn size={25}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;