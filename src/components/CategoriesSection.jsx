import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function CategoriesSection() {
  return (
    <Container className="my-5">
      <h2>Categories</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src="games-category.jpg" />
            <Card.Body className="text-center">
              <Card.Title>Games</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src="fan-gear-category.jpg" />
            <Card.Body className="text-center">
              <Card.Title>Fan Gear</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoriesSection;
