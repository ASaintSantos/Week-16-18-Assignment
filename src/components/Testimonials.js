import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Form, Image } from 'react-bootstrap';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', content: '' });

  useEffect(() => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: '', content: '' });
  };

  const handleShow = () => setShowModal(true);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setTestimonials([...testimonials, formData]);
    handleClose();
  };

  const handleDelete = index => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials.splice(index, 1);
    setTestimonials(updatedTestimonials);
  };

  const handleEdit = index => {
    const testimonialToEdit = testimonials[index];
    setFormData({ name: testimonialToEdit.name, content: testimonialToEdit.content });
    handleShow();
  };

  return (
    <Container className='text-center'>
      <h1 className='text-center'>Share Your Story With Us</h1>
      <Image style={{ paddingTop: "30px" }} src="https://rccgkingdompalace.org/files/threads/1559307093_testimonies.jpg" fluid rounded />
      <h2 style={{ padding: "20px" }}>The Purpose For This Page</h2>
      <p style={{ padding: "20px" }}>This page was created to allow Believers the opportunity to share what The Lord has done for every individual. These stories are a way to bring encouragement and let His light shine through our lives to draw us closer in our relationship to Him and ultimately bring Glory to His Name.</p>
      <div style={{ padding: "20px" }} className='d-grid'>
        <Image style={{ paddingTop: "30px" }} src="https://scripture-images.us-east-1.linodeobjects.com/images/kjv/desktop_wallpapers_07/Revelation-12-11-KJV-scenic-bible-verse-wallpaper-I66012011-L07.jpg" fluid rounded />
        <Button variant="outline-light" size='lg' onClick={handleShow}>Add Testimony</Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} name="content" value={formData.content} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>

      <div>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.content}</p>
            <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
            <Button variant="warning" onClick={() => handleEdit(index)}>Edit</Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;