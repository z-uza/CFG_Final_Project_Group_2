import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './RideCards.css'

function RideCards(props) {
    return ( 
      <div className="custom-card"> 
        <Card>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text> {props.text} </Card.Text>
          <Button variant="primary">{props.buttonText}</Button>
        </Card.Body>
      </Card>    
      </div>
      )
}

export default RideCards;


