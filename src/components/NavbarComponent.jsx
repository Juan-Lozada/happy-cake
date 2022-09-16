import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavbarComponent() {
    return (
        <>
            <Navbar style={{ backgroundColor: '#CDF0EA' }}>
                <Container className='justify-content-start'>
                    <Link to="/" style={{color: '#54BAB9'}} className=" ms-3 text-decoration-none">
                        Home
                    </Link>
                    <Link to="/contact" style={{color: '#54BAB9'}} className=" ms-3 text-decoration-none">
                        Contact
                    </Link>
                </Container>


                <Container className='justify-content-end'>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src='https://cdn-icons-png.flaticon.com/512/992/992717.png'
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Happy Cake
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent
