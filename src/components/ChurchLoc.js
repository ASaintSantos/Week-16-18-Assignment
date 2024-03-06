import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import churches from './churchArray';

function ChurchLoc() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://65bbef7f52189914b5bd5dd3.mockapi.io/user/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


  console.log(churches)
  
    return (
      <Container>
        
        <Row>
        <h1 className='text-center'>Church Locations</h1>
          {data.map(item => (
            <Col key={item.id} sm={6} md={4} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.address}</Card.Text>
                  <Card.Text>{item.phone}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  );
}

export default ChurchLoc;