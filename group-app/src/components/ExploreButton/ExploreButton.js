import Button from 'react-bootstrap/Button';
import './ExploreButton.css';

function ExploreButton({ onClick }) {
  return (
    <Button variant="primary" className='ExploreButton' onClick={onClick}>
      Explore Rides
    </Button>
  );
}

export default ExploreButton;
