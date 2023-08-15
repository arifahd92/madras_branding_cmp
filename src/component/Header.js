import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 mt-4">
          <img
            src="http://www.tmbc.in/assets/images/logo.png"
            alt="logo"
            srcSet=""
          />
        </div>
        <div className="col-8 d-flex justify-content-end align-items-center offset-md-2 ">
          <Navbar
            bg="light"
            expand="lg"
            className="d-flex justify-content-center align-items-center"
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto d-flex justify-content-center align-items-center">
                <Nav.Link as={Link} to="/home">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  ABOUT
                </Nav.Link>
              </Nav>
              <Nav className="d-flex justify-content-center align-items-center">
                <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/branding">BRANDING</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/digital-marketing">DIGITAL MARKETING</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/technology">TECHNOLOGY</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/photo-video">PHOTO & VIDEO</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="mr-auto d-flex justify-content-center align-items-center">
                <Nav.Link as={Link} to="/work">
                  WORK
                </Nav.Link>
                <Nav.Link as={Link} to="/client">
                  CLIENT
                </Nav.Link>
                <Nav.Link as={Link} to="/careers">
                  CAREERS
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  CONTACT
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default App;
