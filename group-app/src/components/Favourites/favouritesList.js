import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.css'; 
import './FavouritesList.css'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import AddToFavourites from './FavouritesButton';

// need to get these items from local storage and show it back to the user


function favouritesList() { // FOR LOOP - for each ride in list, create a new item 

  const rides = ['Colossus', 'Thorpe Park', 'Stealth']

  return (
    <>
    <h1> Here are your favourite rides... </h1>
    <div className="custom-list"> 
    <ListGroup>
      <ListGroup.Item className="custom-list-item">Ride 1 <AddToFavourites /> </ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Ride 2 </ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Ride 3</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Ride 4</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Ride 5</ListGroup.Item>
    </ListGroup>
    </div>

    </>
  )
}

export default favouritesList;

// Need to make this dynamic based on saved rides by the user... 
// Use local storage to show saved rides  

// Add to favourites button...
// Click event to save ride in an array 
// Save this array to local storage 

let userFavourites = [] // Initialise an empty array 
// ride = ride.name (pulled from API)

function saveToFavourites(e) {
  const itemText = e.target.closest('.custom-list-item').textContent.trim().split('Add To Faves')[0].trim();
  if (!userFavourites.includes(itemText)) { // if array doesnt include the item, push it in
  userFavourites.push(itemText)
  console.log(userFavourites)
  }
}

// When button is clicked, call function to save the ride nae to the userFavourites Array
// Update userFavourites in local storage

// localStorage.setItem("ride", JSON.stringify(userFavourites))

// How to handle duplicates of rides... if entered into favourites already... 

// https://blog.logrocket.com/using-localstorage-react-hooks/