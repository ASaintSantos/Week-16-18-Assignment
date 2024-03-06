import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

 


    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Why do you seek <strong>The Living</strong> among <strong>The Dead</strong>?</Popover.Header>
            <Popover.Body>
                He is <strong>Risen</strong> and has made a way for sinners!
            </Popover.Body>
        </Popover>
    );

    const OverlayHome = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="success">Click and See</Button>
        </OverlayTrigger>
    );




export default OverlayHome