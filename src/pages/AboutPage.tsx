
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image src="https://picsum.photos/id/1005/400/400" roundedCircle className="artist-image" />
        </Col>
        <Col md={8}>
          <h2>About the Artist</h2>
          <p className="lead">
            A passionate artist with a love for creativity and expression.
          </p>
          <p>
            This is a brief introduction about the artist. The artist specializes in various forms of art, including painting, sculpture, and digital art. With a passion for creativity and expression, the artist has been creating unique pieces that resonate with audiences worldwide.
          </p>
          <p>
            The artist's work has been featured in numerous exhibitions and galleries, showcasing a diverse range of styles and techniques. Each piece tells a story, inviting viewers to explore the emotions and inspirations behind the art.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3 className="text-center">Career Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h5>2015 - The Beginning</h5>
                <p>Started the journey as a self-taught artist, experimenting with different mediums.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h5>2018 - First Exhibition</h5>
                <p>Featured in a local art gallery, which marked the first public recognition of the artist's work.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h5>2020 - International Recognition</h5>
                <p>Received an award in an international art competition, opening doors to a global audience.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h5>2023 - Going Digital</h5>
                <p>Expanded into the world of digital art, creating stunning pieces that blend traditional techniques with modern technology.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
