import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ListContact() {
    return (
        <div> <br></br><br></br>
            <ListGroup className="fw-bold" variant="flush">
                <ListGroup.Item style={{marginInline:"70px", paddingLeft:"65px"}}>Washington Location: 5678 W Selah Street, 98902</ListGroup.Item>
                <ListGroup.Item style={{marginInline:"70px", paddingLeft:"40px"}}>Services: Sunday @ 9am & 11am & Thursday @ 7pm</ListGroup.Item>
                <ListGroup.Item style={{marginInline:"70px", paddingLeft:"200px"}}>Phone #(509)777-1234</ListGroup.Item>
                <ListGroup.Item style={{marginInline:"70px", paddingLeft:"180px"}}>Email: lifechurch@live.com</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default ListContact;