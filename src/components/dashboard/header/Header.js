import React, { Component } from 'react';
import { Container, Col, Row, Image, DropdownButton, Dropdown } from 'react-bootstrap';
import techMLogo from '../../../asset/techm_logo.png';
import reactLogo from '../../../asset/login_react_logo.png';
import uxmLogo from '../../../asset/uxm_logo_sm.png';
import { FaSearch, FaUserCircle, FaAngleDown, FaToggleOn } from 'react-icons/fa'

export default class Header extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        document.body.classList.toggle('invertTheme');
        const drplist = this.state.isOpen;
        this.setState({ isOpen: !drplist });
    };
    // $('.catalog-test').click(function () {
    //     $('html').toggleClass('themechange')
    // });
    render() {
        return (
            <div style={{ backgroundColor: '#1D2025', borderBottom: '1px solid grey', paddingBottom: '7px' }}>
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
                            <Image src={reactLogo} className="float-left mr-2" />
                            <p className="mt-2 lead">REACT COMPONENT PORTAL</p>
                        </Col>
                        <Col md={3} className="mt-3 text-white text-center lead">
                            {/* <FaSearch size={20} /> Search Component */}
                            <input type="search" placeholder="search component" />

                        </Col>
                        <Col md={3} className="mt-3 text-white text-right" >
                            <FaUserCircle size={25} />
                            <FaAngleDown className="mr-4" />
                            <Image src={uxmLogo} className="mr-4" />
                            {/* <FaToggleOn size={25} /> */}
                            <label className="switch">
                                <input type="checkbox" className="catalog-test" onClick={this.toggle} />
                                <span className="slider round"></span>
                            </label>
                        </Col>
                        {/* <nav class="navbar navbar-expand-md pb-0 navbar-light" role="navigation">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link nav-home-icon" href="#">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav> */}

                    </Row>
                </Container>
            </div>
        )
    }
}
