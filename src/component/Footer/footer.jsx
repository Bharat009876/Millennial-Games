import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
          <img
            src={logo}
            alt="Gamify Logo"
            style={{ height: "100px", width: "auto", marginRight: "5px" }}
          />
        
            <p>
            🎮Where Every Millennial Finds Their Game – Dive Into a World of Next-Gen Adventures, Strategy, and Fun!
            </p>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="/genre" className="text-white-50 text-decoration-none">Genres</a></li>
              <li><a href="/contact" className="text-white-50 text-decoration-none">Contact Us</a></li>
              <li><a href="/login" className="text-white-50 text-decoration-none">Login</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="text-uppercase mb-3">Contact</h6>
            <p>Email: bharat.22jics196@jietjodhpur.ac.in</p>
            <p>Phone: +91 7426946804</p>
            <p>Address: JIET Jodhpur</p>
          </Col>

          <Col md={3} className="mb-4 text-md-end text-center">
            <h6 className="text-uppercase mb-3">Follow Us</h6>
            <a href="#" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-youtube"></i>
            </a>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center text-white-50 pt-3">
            © 2025 Game Library. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;