import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="navmenu">
      <Container fluid>
        <Navbar.Brand className='savory-logo' href="#">savory</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 py-5 my-lg-0 align-items-center menu"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link className='menu-link' href="/">Home</Nav.Link>
            <Nav.Link className='menu-link' href="/blog">Blog</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;