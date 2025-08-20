import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPen } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setError('Please fill out all fields correctly.');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
      // Here you would typically send the form data to a server
      console.log('Form data submitted:', formData);
      // Optionally reset form
      // setFormData({ name: '', email: '', message: '' });
      // setValidated(false);
    }

    setValidated(true);
  };

  return (
    <Container className="mt-5 contact-page page-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center mb-5">
            Have a question or want to work together?
          </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <div className="input-group">
                <span className="input-group-text"><FaUser /></span>
                <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
              </div>
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <div className="input-group">
                <span className="input-group-text"><FaEnvelope /></span>
                <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
              </div>
            </Form.Group>

            <Form.Group controlId="message" className="mb-3">
              <div className="input-group">
                <span className="input-group-text"><FaPen /></span>
                <Form.Control as="textarea" name="message" rows={4} placeholder="Your message" value={formData.message} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">Please enter your message.</Form.Control.Feedback>
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
          {error && !submitted && (
            <Alert variant="danger" className="mt-4">
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
