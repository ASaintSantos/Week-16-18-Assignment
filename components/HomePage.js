import React from 'react'
import  { Row, Col, Image, Card, Container}  from 'react-bootstrap';
import Cards from './Cards';
import FeedbackForm from './FeedbackForm';
import ChurchLoc from './ChurchLoc';
import OverlayHome from './OverlayHome';





function Home() {
  return (
    <div className='homepage'>
        
        <main>
      <Container>

      <Row className='px-4 my-5'>
        <Col sm={7}>
        <Image style={{paddingTop:"120px"}} src="https://img.freepik.com/premium-photo/death-resurrection-jesus-christ-tomb-cross_567332-695.jpg" fluid rounded className='' />

          <OverlayHome />

        </Col>
        <Col sm={5}>
          <h1 class='font-weight-light'>The Gospel (Good News)</h1><br></br>
          <p className='mt-3'>1 Corinthians 15:1-4 <br></br>  1 Moreover, brethren, I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand;

2 By which also ye are saved, if ye keep in memory what I preached unto you, unless ye have believed in vain.

3 For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures;

4 And that he was buried, and that he rose again the third day according to the scriptures:</p>
        </Col>
      </Row>

      <Row>
      <Card className='text-center bg-secondary text-white my-5 py-4'>
      <Card.Body>- What do we do after we believe The Gospel? - How do we apply it to our lives? -</Card.Body>
    </Card>
      </Row>

      <Cards />

      <ChurchLoc />

      <h2 style={{textAlign:"center", marginTop:"15px"}}>Please Give Us Your Feedback.</h2>

      <FeedbackForm />

     

      </Container>
      </main>
    </div>
  )
}

export default Home