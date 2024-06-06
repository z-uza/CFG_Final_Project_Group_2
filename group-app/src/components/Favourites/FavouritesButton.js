import React, { useState, useEffect } from 'react';
import { TiHeartFullOutline } from 'react-icons/ti';
import './FavouritesButton.css';


const AddToFavouritesBtn = ({ rideName, addToFavourites }) => { // pass in rideName and the addToFavourites function 
  const [isFavourite, setAsFavourite] = useState(
    JSON.parse(localStorage.getItem(`favourite-${rideName}`)) || false // initiliase use state with either the favourited ride or false if no favourite
  );

  const manageAddToFavourites = () => { // handles adding new ride to favourites -- helper function
    addToFavourites(rideName)
    setAsFavourite(true); // update state to true
    localStorage.setItem(`favourite-${rideName}`, true);
  }

  useEffect(() => {
    localStorage.setItem(`favourite-${rideName}`, JSON.stringify(isFavourite)); // update local storage with current value of isFavourite
  }, [isFavourite, rideName]);

  return (
    <div className='btn-container'>
      <button
        onClick={manageAddToFavourites}
        className={`btn-main ${isFavourite ? 'added' : ''}`}
        disabled={isFavourite}>
        <TiHeartFullOutline color={isFavourite ? 'red' : 'black'} size="25px" /> 
        {isFavourite ? 'Added' : 'Add to Favourites'}
      </button>
      </div>
  )};

export default AddToFavouritesBtn;

