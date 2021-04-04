import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const brandstyle = {
    fontSize: "2rem",
}

const linkstyle = {
    fontSize: '1.025rem',
}

const Header = () => {   
    return (
        <header>
            <h1>
                <Navbar bg="dark" variant="dark" expand="lg" className='ml auto' collapseOnSelect>
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand style={brandstyle} >Sushrut Ecommerce</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <LinkContainer to='/cart'>
                                    <Nav.Link style={linkstyle}><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                    <Nav.Link style={linkstyle} ><i className="fas fa-user"></i>Sign In</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </h1>
        </header>
    )
}

export default Header
