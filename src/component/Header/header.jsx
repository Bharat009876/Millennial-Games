import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Millennial Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Aboutus">AboutUs</Nav.Link>
            <Nav.Link as={Link} to="../Contactus">Contact Us</Nav.Link>
            
            </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search games..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;