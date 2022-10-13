import React from "react";
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css"

const NavBar = () => {
  return (
    <div id="navbar">
      <Navbar collapseOnSelect expand="md" className="mb-3" fixed="top">
        <Container fluid>
          <Navbar.Brand className="navtitles" href="#">
            Soulshine.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            className="offCanvasnav"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Nav.Link collapseOnSelect className="navtitles" href="/">
                  Soulshine.
                </Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  collapseOnSelect
                  className="nav-links"
                  href="/#/aboutSanam"
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  collapseOnSelect
                  className="nav-links"
                  href="/#/workingTogether"
                >
                  Working Together
                </Nav.Link>
                <Nav.Link
                  collapseOnSelect
                  className="nav-links"
                  href="/#/coachingOptions"
                >
                  Coaching Options
                </Nav.Link>
                <Nav.Link
                  collapseOnSelect
                  className="nav-links"
                  href="/#/applyforcoaching"
                >
                  Apply for Coaching
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;