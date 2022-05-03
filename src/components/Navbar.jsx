import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>

          <Nav className="me-auto">
            <Link to="/pokemon">
              <Button variant="outline-dark">PokeMon</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
