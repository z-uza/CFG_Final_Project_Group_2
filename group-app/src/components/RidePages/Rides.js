import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RideTable from './RideTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThemeParks = () => {
  const { themePark } = useParams(); 
  const [waitTimes, setWaitTimes] = useState([]); // initialise state
  
  const [favourites, setFavourites] = useState(() => {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      try {
        return JSON.parse(storedFavourites);
      } catch (error) {
        console.error('Error retrieving favourites from localStorage', error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    if (themePark) { // runs if themePark changes
      fetchWaitTimes(themePark);
    }
  }, [themePark]);
  
  useEffect(() => {
    try {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    } catch (error) {
      console.error('Error saving favourites to localStorage', error);
    }
  }, [favourites]);

  const fetchWaitTimes = async (themePark) => {
    console.log(`Fetching wait times for: ${themePark}`);
    let parkId;
    switch (themePark) {
      case 'legoland':
        parkId = 1
        break;
      case 'thorpe-park':
        parkId = 2
        break;
      case 'chessington':
        parkId = 3
        break;
      default:
        return;
    }
    
    try {
      const response = await fetch(`http://localhost:5000/get-rides?id=${parkId}`);  // corresponds to Express server route
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('API response:', data);
      const rides = data.lands.flatMap(land => land.rides).map(ride => ({
        name: ride.name,
        waitTime: ride.wait_time,
        isOpen: ride.is_open
      }));
      setWaitTimes(rides);
    } catch (error) {
      console.error('Error fetching wait times:', error);
    }
  }

  const addToFavourites = (rideName) => {
      setFavourites((prevFavourites) => {
        if (!prevFavourites.includes(rideName)) { // don't add ride to local storage if it's been added already
          const updatedFavourites = [...prevFavourites, rideName];
          return updatedFavourites;
        }
        return prevFavourites;
      });
    };


  return (
    <div className="theme-parks-container">
      <h1>{themePark.charAt(0).toUpperCase() + themePark.slice(1)} Wait Times</h1>
      <div className="content">
        <div className="ride-table">
          <RideTable rides={waitTimes} addToFavourites={addToFavourites} />
        </div>
      </div>
    </div>
  )
};

export default ThemeParks;