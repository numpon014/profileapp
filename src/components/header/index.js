import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import appLogo from '../../assets/images/logo.png';

const StyledWrap = styled.div`
  .logo {
    width: 50px;
  }
  .logout-button {
    color: rgba(0, 0, 0, 0.55);
    text-decoration: none;
  }
`;

function Header({ className }) {

  return (
    <StyledWrap className={className}>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={appLogo}
              alt="Profile Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledWrap>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
