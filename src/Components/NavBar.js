import React from "react";
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Mobile.css"


const NavBar = () => {
  return (
    <div id="navbar">
      <Navbar expand="md" className="mb-3" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">Soulshine.</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="top"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Soulshine.
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-links" to="/aboutSanam">
                  About Me
                </Link>
                <Link className="nav-links" to="/workingTogether">
                  Working Together
                </Link>
                <Link className="nav-links" to="/coachingOptions">
                  Coaching Options
                </Link>
                <Link className="nav-links" to="/applyforcoaching">
                  Apply for Coaching
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;