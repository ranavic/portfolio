
import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isSpinning, setIsSpinning] = useState(false);

  const navClass = isHomePage ? 'navbar-transparent' : 'navbar-solid';

  const handleToggleTheme = () => {
    setIsSpinning(true);
    toggleTheme();
    setTimeout(() => {
      setIsSpinning(false);
    }, 500); // Match the animation duration
  };

  return (
    <Navbar
      variant={isHomePage ? 'dark' : theme}
      expand="lg"
      collapseOnSelect
      fixed="top"
      className={navClass}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">Artist Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Button variant="outline-secondary" onClick={handleToggleTheme} className="ms-2">
              <span className={`theme-toggle-icon ${isSpinning ? 'theme-toggle-icon--spinning' : ''}`}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
