import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">משפחת דביר</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                בית
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                אודות
              </Nav.Link>

              <Nav.Link as={Link} to="/artist">
                האמנים
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                יצירת קשר
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
