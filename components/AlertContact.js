import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const AlertContact = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values from the state variables (name, email, phoneNumber, message)
    // For example:
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    // Show alert
    setShowAlert(true);
  };

  return (
    <div>
    <Container>
      <h1 style={{marginLeft:"250px"}}>Contact Us</h1><br></br>
      <p style={{paddingLeft:"60px"}}>Connect with the right people at Life Church.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            style={{padding:"15px"}}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            style={{padding:"15px"}}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            style={{padding:"15px"}}
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            style={{padding:"15px"}}
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button style={{marginTop:"15px"}} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Thank you for contacting us! We will get back to you soon.
        </Alert>
      )}
    </Container>
    </div>
  )
}

export default AlertContact