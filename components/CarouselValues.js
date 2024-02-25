import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

function CarouselValues() {
  return (
    <div>
        <Container>
      <Row>
        <Col>
          <h1 className='text-center' >Our Values</h1>
          <p className='text-center' >At Life Church, our values are deeply rooted in the teachings of Jesus Christ and the principles found in the Holy Scriptures.<br></br><br></br> WE VALUE:<br></br><br></br>

FAITH:<br></br> We believe in the power of faith in God, trusting in His sovereignty, and relying on His promises. <br></br><br></br>

LOVE:<br></br> We are committed to demonstrating the love of Christ to all people, showing compassion, kindness, and forgiveness.<br></br><br></br>

COMMUNITY:<br></br> We prioritize building authentic relationships within our church family, supporting and encouraging one another in our spiritual journeys.<br></br><br></br>

WORSHIP:<br></br> We recognize the importance of worship as a central aspect of our faith, expressing our gratitude and reverence for God through praise and adoration.<br></br><br></br>

SERVICE:<br></br> We are called to serve others with humility and generosity, following the example of Jesus who came not to be served but to serve.<br></br><br></br>

TRUTH:<br></br> We uphold the truth of God's Word as our ultimate authority, seeking to live lives that reflect its teachings with integrity and authenticity.<br></br><br></br>

MISSION:<br></br> We are passionate about fulfilling the Great Commission, sharing the gospel message and making disciples of all nations.<br></br><br></br>

HOPE:<br></br> We hold onto the hope found in Jesus Christ, believing in His promises of eternal life and restoration.<br></br><br></br>

These values guide our beliefs, actions, and decisions as we seek to live out our faith and impact the world for Christ.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='text-center'>1. Living For The King</h2>
          <p className='text-center'>At Life Church, we are committed to living for King Jesus in every aspect of our lives. We believe that Jesus Christ is not only our Savior but also our Lord and King. Therefore, we strive to align our thoughts, words, and actions with His teachings and example. Our desire is to glorify Him in everything we do, whether it's worshipping together as a community, serving others with love and compassion, or sharing the good news of salvation with those around us. We are called to be ambassadors of His kingdom, shining His light in a world that desperately needs hope and redemption. As we follow King Jesus, we find purpose, joy, and fulfillment in fulfilling His will and advancing His kingdom here on earth. May our lives be a testimony to His reign and may His name be exalted above all.</p><br></br>
          <Image src="https://preview.redd.it/thought-i-would-share-with-yall-an-art-made-by-midjourney-v0-gnck5tqh3oda1.png?auto=webp&s=14917033241ada3be94f1c7fd94886437d39f32b" style={{marginLeft:"60px", padding:"80px"}} alt="Customer Focus" fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='text-center'>2. Integrity</h2>
          <p className='text-center'>At Life Church, we hold integrity as a core value, steadfast in our commitment to honesty, transparency, and moral uprightness in all our dealings. We believe that living with integrity reflects the character of Christ and strengthens the foundation of our faith community.</p><br></br>
          <Image src="https://2.bp.blogspot.com/-rDc6XvZMokA/WFNpdpyUguI/AAAAAAAADNg/Qa6jwA6qtkIJP_ixcgZymXXFxO-YXIGjgCLcB/s1600/351%2BMultitudes.jpg" style={{marginLeft:"400px"}} alt="Integrity" fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='text-center'>3. Community</h2>
          <p className='text-center'>At Life Church, we cherish community as a sacred bond, uniting believers in fellowship, support, and love as we journey together in faith. We believe that in community, we find strength, encouragement, and accountability to live out the teachings of Jesus Christ and extend His love to the world around us.</p><br></br>
          <Carousel>
            <Carousel.Item>
              <Image src="https://www.freeiconspng.com/thumbs/bible-png/bible-png-16.png" className='text-center'  alt="Holy Bible"  fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://freepngimg.com/thumb/church/149680-cathedral-christ-church-hd-image-free.png" className='text-center' alt="Church" fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://images.vexels.com/media/users/3/239788/isolated/preview/9c9f5d51cc4975d1a1a1232f1c3ce261-holy-spirit-dove-color-stroke.png" className='text-center' alt="Holy Spirit" fluid />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='text-center'>4. The Heart of Our City</h2>
          <p className='text-center'>At Life Church, we are committed to being the heart of our city, serving as a beacon of hope, compassion, and transformation in our community. We strive to embody the love of Christ by meeting the needs of those around us and actively engaging in initiatives that bring about positive change and restoration.</p><br></br>
          <Image src="https://i.ytimg.com/vi/vVGzYgQ5dcY/hqdefault_live.jpg" style={{marginLeft:"400px", padding:"150px"}} alt="Collaboration" fluid />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default CarouselValues