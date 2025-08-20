import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TimelineItem, { TimelineEvent } from '../components/TimelineItem';
import './AboutPage.css';

const timelineEvents: TimelineEvent[] = [
  { year: '2018', title: 'The Beginning', description: 'Started the journey as a self-taught artist, experimenting with different mediums.' },
  { year: '2021', title: 'First Exhibition', description: "Featured in a local art gallery, which marked the first public recognition of the artist's work." },
  { year: '2023', title: 'International Recognition', description: 'Received an award in an international art competition, opening doors to a global audience.' },
  { year: '2025', title: 'Going Digital', description: 'Expanded into the world of digital art, creating stunning pieces that blend traditional techniques with modern technology.' },
];

const AboutPage: React.FC = () => {
  return (
    <Container className="mt-5 page-container">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image src="https://picsum.photos/id/1005/400/400" roundedCircle className="artist-image" loading="lazy" alt="A portrait of the artist" />
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
            {timelineEvents.map((event) => (
              <TimelineItem key={`${event.year}-${event.title}`} event={event} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
