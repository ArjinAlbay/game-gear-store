import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-5">
      <Container className="p-4">
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>Information about the store.</p>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <p>Contact details.</p>
          </Col>
          <Col lg={4} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Privacy Policy</h5>
            <p>Privacy policy details.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
