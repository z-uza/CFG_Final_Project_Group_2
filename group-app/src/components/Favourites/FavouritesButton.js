import React from 'react'; 
import { TiHeartFullOutline } from "react-icons/ti";

import { useLocalStorage } from 'usehooks-ts' // custom hook from lib
import './FavouritesButton.css'

function AddToFavourites({rideName}) {

  const [favourites, setFavourites] = useLocalStorage('favourites', []); 

  const addToFavourites = () => { // this will update the state
    setFavourites([...favourites, rideName]);
  };

  return (
    <div class="btn-container">
      <button onClick={addToFavourites}> <TiHeartFullOutline color="red" size="30px"/> Add to Favourites</button>
    </div>
  );
}

export default AddToFavourites;