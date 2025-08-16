
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

const featuredImages = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400',
];

const HomePage: React.FC = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <Container className="hero-content text-center text-white">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1>Welcome to the Artist's Portfolio</h1>
              <p>
                This is a place to showcase beautiful and amazing artwork.
              </p>
              <Link to="/gallery">
                <Button variant="primary">View Gallery</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5">
        <Row className="text-center">
          <Col>
            <h2>Featured Work</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          {featuredImages.map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="featured-image-container">
                <img src={image} alt={`featured-work-${index}`} className="img-fluid" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
