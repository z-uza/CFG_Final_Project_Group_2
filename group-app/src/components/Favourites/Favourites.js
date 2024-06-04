import { useState } from "react";
import Favourites_List from "./favouritesList";

function Favourites() {
    return ( 
        <div> 
        <h1> Here are your favourite rides... </h1>
        <Favourites_List />
        </div>
    )
}

export default Favourites;

// import React, { useState, useEffect } from 'react'; 

// const AddToFavourites = () => {
//   const [favourites, setFavourites] = useState([]); // arrays to store favourites 
//   const [rideName, setRideName] = useState('');

//   useEffect(() => {
//     const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
//     setFavourites(savedFavourites); 
//   }, []);

//   const handleAddToFavourites = () => {
//     const updatedFavourites = [...favourites, rideName];
//     setFavourites(updatedFavourites);
//     localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
//   };

//   return (
//     <div>
//       <h1>Add to Favourites</h1>
//       <input
//         type="text"
//         placeholder="Enter ride name"
//         value={rideName}
//         onChange={(e) => setRideName(e.target.value)}
//       />
//       <button onClick={handleAddToFavourites}>Add to Favourites</button>
//       <h2>Your Favourite Rides</h2>
//       <ul>
//         {favourites.map((favourite, index) => (
//           <li key={index}>{favourite}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AddToFavourites;
