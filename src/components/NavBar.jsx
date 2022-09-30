import React from 'react';
import { Form, Nav, Navbar, Container, Button, NavDropdown, Row, Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap'

import logo from '../assets/images/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { MdShoppingBasket } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

// import accountIcon from '../assets/icons/account.png'
// import cartIcon from '../assets/icons/cart.png'


const pages = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About Us",
        path: "/about",
    },
    {
        name: "Beds & Headboards",
        path: "/beds",
    },
    {
        name: "Pillows",
        path: "/pillows",
    },
    {
        name: "Sleep Accessories",
        path: "/accessories",
    },
    {
        name: "Contact Us",
        path: "/contactUs",
    },
];


const NavBar = () => {
    const cartItems = 0;
    return (
        <Navbar bg="light" expand="lg" className='navBar my-3'>
            <Container fluid className='mx-5' >
                <LinkContainer to='/'  >
                    <Navbar.Brand >
                        <Image fluid className='nav-image' src={logo} alt="logo" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  >

                    <Nav className="me-auto" >
                        {pages.map((page) => (
                            <LinkContainer to={page.path}>
                                <Nav.Link className='menuItem' key={page.name}>
                                    {page.name}
                                </Nav.Link>
                            </LinkContainer>
                        ))}
                    </Nav>
                    <div>
                        <Stack direction="horizontal">
                            <div className='searchContainer' >
                                <Form className="d-flex">
                                    <Form.Control type="search" placeholder="Search" className="me-2 nav-search" aria-label="Search" />
                                    <BiSearch className='search-icon' />
                                </Form>
                            </div>
                            <div>
                                <Nav className='nav-social-icons' >
                                    <Nav.Link href='https://www.instagram.com/'> <AiFillInstagram /> </Nav.Link>
                                    <Nav.Link href='https://twitter.com/'><AiOutlineTwitter /> </Nav.Link>
                                    <Nav.Link href='https://www.facebook.com/' > <FaFacebookF /> </Nav.Link>
                                </Nav>
                            </div>
                        </Stack>
                        <Stack direction="horizontal" >
                            <Nav>
                                <NavDropdown title={<span> <FaUser />  My Account </span>}
                                    className='btn btn-secondary btn-my-account mt-3 me-3' id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/" className='dropdownItem' >Action</NavDropdown.Item>
                                </NavDropdown>
                                <div className='btn btn-secondary btn-my-account mt-3 ' >
                                    <Nav.Link   >
                                        <MdShoppingBasket /> ({cartItems})  Items
                                    </Nav.Link>
                                </div>
                            </Nav>
                        </Stack>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;