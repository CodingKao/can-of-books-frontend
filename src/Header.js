import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{ marginLeft: '1em' }}>My Favorite Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ justifyContent: 'flex-end', width: '100%', marginRight: '1em' }}>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/About" className="nav-link">About Us</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
