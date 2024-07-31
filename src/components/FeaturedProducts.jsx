import React from "react";
import { Container, Carousel } from "react-bootstrap";

function FeaturedProducts() {
  return (
    <Container className="my-5 pt-5">
      <h2>Featured Products</h2>
      <Carousel className="shadow">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="featured-game-1.jpg"
            alt="Featured Game 1"
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
            <h3>Featured Game 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="featured-game-2.jpg"
            alt="Featured Game 2"
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
            <h3>Featured Game 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </Container>
  );
}

export default FeaturedProducts;
