import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.css'; 
import './favouritesList.css'


function favouritesList() {
  return (
    <div className="custom-list"> 
    <ListGroup>
      <ListGroup.Item className="custom-list-item">Ride 1</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Ride 2</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Ride 3</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Ride 4</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Ride 5</ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default favouritesList;

// Need to make this dynamic based on saved rides by the user... 
// Use local storage to show saved rides  