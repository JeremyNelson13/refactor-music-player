import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const NavigationBar = () => {
    return (
        <div>
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                        <Navbar.Brand href="/">QuickBlog</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Get Started</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/login">Login/Register</Nav.Link>
                        </Nav>
                        
                    </Container>
                </Navbar>
            </Container>
        </div>
    )

}

export default NavigationBar;