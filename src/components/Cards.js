import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardArray from "./CardArray";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function Cards() {
    console.log(CardArray);
    return (
        
        <Col>
        <Row>
        {CardArray.map((card, index) => {
            return (
                <Card key={index} style={{ width: "18rem", padding: "05px", margin:"65px"}} >
                    <Card.Img variant='top' src={card.img} style={{ width: "17rem", margin:"1px"}} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        <Link to='/doctrine'>
                        <Button variant="primary">Come and See</Button>
                        </Link>
                    </Card.Body>
                </Card>
            );
        })}
        </Row>
      </Col>
      
    );

}

export default Cards;