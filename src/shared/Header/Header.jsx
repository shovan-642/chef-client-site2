import React, { useContext } from 'react';
import {Container, Form, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const {user}= useContext(AuthContext)

  return (
    <div>
      <Navbar expand="lg" className="navmenu">
        <Container fluid>
          <Navbar.Brand className='savory-logo' href="#">Savory</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 py-5 my-lg-0 align-items-center menu"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='menu-link' href="/">Home</Nav.Link>
              <Nav.Link className='menu-link' href="/blog">Blog</Nav.Link>
            </Nav>
            <Form className="d-flex">
              {
                user && <FaUserCircle style = {{fontSize: "2rem"}}></FaUserCircle>
              }
              
{           
user ?
<button>Logout</button> :
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>}

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;