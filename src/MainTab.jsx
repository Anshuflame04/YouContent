import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './MainTab.css';

// Import images from the src/assets folder
import menuIcon from './assets/menu.png';
import closeIcon from './assets/close.png';
import fanIcon from './assets/fan.png'; // Import the fan icon

const MainTab = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar expand="lg" className="navbar-custom navbar-dark fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="brand">
          YouContent
          <img src={fanIcon} alt="Fan Icon" className="fan-icon1" />
        </Navbar.Brand>

        <div className="custom-navbar-toggler" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? closeIcon : menuIcon}
            alt="menu icon"
            className="menu-icon"
          />
        </div>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isMenuOpen ? 'show' : ''}
        >
          <Nav className="ms-auto navbar-links">
            <Nav.Link as={Link} to="/home" className="nav-link" onClick={closeMenu}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tools" className="nav-link" onClick={closeMenu}>
              Tools
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="btn btn-dark nav-link" onClick={closeMenu}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainTab;
