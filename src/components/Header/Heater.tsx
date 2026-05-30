import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="shadow-sm py-3"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-4"
        >
          About | Me
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>

            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>

            <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>

            <Nav.Link as={NavLink} to="/contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;