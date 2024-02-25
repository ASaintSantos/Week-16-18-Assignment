import React from 'react'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function FeedbackForm() {
  return (
    <>
    
    <br></br>
    
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
      
        <Form.Control
        
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
        <Button style={{marginTop:"5px", marginBottom:"5px"}} variant="primary" type="submit">
          Submit
        </Button>
      </FloatingLabel>
    </>
  )
}

export default FeedbackForm