import React, { useState, useEffect } from 'react';
import RenderFavouriteRides from './favouritesList';

const RetrieveFavourites = () => {
  const [favourites, setFavourites] = useState([]); // initialise state of favourites as an empty array

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')); // retrieve items from local storage
    if (savedFavourites) { // if there's existing items in the array...
    setFavourites(savedFavourites)// re-set the favourites state with them
    } else {
    setFavourites([]); // if its empty, just have an empty array
    }}, [])

  return ( // passing favourites from local storage down into the favouritelist component as a prop so they can be rendered in the Favourites table
    <div> 
      <RenderFavouriteRides favourites={favourites} /> 
    </div>
  );
};

export default RetrieveFavourites;
