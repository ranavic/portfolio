
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPen } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    const name = e.currentTarget.formBasicName.value;
    const email = e.currentTarget.formBasicEmail.value;
    const message = e.currentTarget.exampleForm.ControlTextarea1.value;

    if (name && email && message) {
      setSubmitted(true);
      setError(false);
      // Here you would typically send the form data to a server
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
    <Container className="mt-5 contact-page">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center mb-5">
            Have a question or want to work together?
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName" className="mb-3">
              <div className="input-group">
                <span className="input-group-text"><FaUser /></span>
                <Form.Control type="text" placeholder="Enter your name" required />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <div className="input-group">
                <span className="input-group-text"><FaEnvelope /></span>
                <Form.Control type="email" placeholder="Enter email" required />
              </div>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3">
              <div className="input-group">
                <span className="input-group-text"><FaPen /></span>
                <Form.Control as="textarea" rows={3} placeholder="Your message" required />
              </div>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>

          {submitted && (
            <Alert variant="success" className="mt-4">
              Thank you for your message! We will get back to you shortly.
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="mt-4">
              Please fill out all fields before submitting.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
