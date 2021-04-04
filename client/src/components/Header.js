import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { navbar, navbarBrand} from './header.css'

const Header = () => {   
    return (
        <header>
            <h1>
                <Navbar bg="dark" variant="dark" expand="lg" className='ml auto' collapseOnSelect>
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand style={navbar} >Sushrut Ecommerce</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <LinkContainer to='/cart'>
                                    <Nav.Link style={navbarBrand}><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                    <Nav.Link style={navbarBrand} ><i className="fas fa-user"></i>Sign In</Nav.Link>
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
