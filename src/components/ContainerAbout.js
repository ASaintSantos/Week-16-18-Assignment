import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function ContainerAbout() {
  return (
    <div>
        <Container>
      <Row>
        <Col><br></br>
          <h1 className='text-center'>About Us</h1><br></br>
          <p>Welcome to our website! <br></br><br></br>Here you can find out more about our Church and what we do and live by.</p><br></br>
          <p>"At Life Church, we are a vibrant community of believers dedicated to following Jesus Christ and spreading His love and message of hope. Our church is a place where people from all walks of life come together to worship God, grow in their faith, and serve others with compassion and grace. With a foundation rooted in biblical truth and a spirit of unity, we strive to create an atmosphere of acceptance and belonging where everyone feels welcomed and valued. Through inspiring worship services, engaging small groups, and impactful outreach ministries, we seek to glorify God and make a positive difference in our community and beyond. Come join us as we journey together in faith, hope, and love.".</p><br></br><br></br>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='text-center'>Our Mission</h2><br></br>
          <p>"At Life Church, our mission is to glorify God by making disciples of all nations, baptizing them in the name of Jesus Christ and teaching them to obey everything Jesus commanded. We are committed to loving God with all our hearts, souls, minds, and strength, and loving our neighbors as ourselves. Through worship, prayer, fellowship, and service, we seek to demonstrate the love of Christ to our community and beyond, proclaiming the good news of salvation and inviting others to experience the transforming power of the gospel."</p><br></br>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='text-center'>Our Team</h2><br></br>
          <p>Meet the dedicated team behind our Church:</p>
          <ul>
            <li>John Doe - Pastor</li>
            <li>Jane Doe - Pastor's Wife</li>
            <li>Michael Johnson - Bishop</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col><br></br>
          <h2 className='text-center'>Contact Us</h2><br></br>
          <p>If you have any questions or inquiries, feel free to contact us:</p>
          <ul>
            <li>Email: lifechurch@hotmail.com</li>
            <li>Phone: (509)-456-7890</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col><br></br>
          <h2 className='text-center'>Our Church</h2><br></br>
          <p>Visit us at our Church: LIFE CHURCH</p>
          <Image src="https://images.squarespace-cdn.com/content/v1/634c4cf9d612d87a6625af5f/1667100355221-U0KPFOV3VZ0VFD35MNXV/se.jpg" alt="Life Church" className='text-center' fluid />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ContainerAbout