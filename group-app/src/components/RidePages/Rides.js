import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RideTable from './RideTable';
import RideCards from './RideCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RideCards.css';

const ThemeParks = () => {
  const { themePark } = useParams();
  const [waitTimes, setWaitTimes] = useState([]);

  useEffect(() => {
    if (themePark) {
      fetchWaitTimes(themePark);
    }
  }, [themePark]);

  const fetchWaitTimes = async (themePark) => {
    console.log(`Fetching wait times for: ${themePark}`);
    let parkId;
    switch (themePark) {
      case 'legoland':
        parkId = 'legoland-windsor';
        break;
      case 'thorpe-park':
        parkId = 'thorpe-park';
        break;
      case 'chessington':
        parkId = 'chessington';
        break;
      default:
        return;
    }
    try {
      const response = await fetch(`https://queue-times.com/en-GB/parks/${parkId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('API response:', data);
      const rides = data.lands.flatMap(land => land.rides).map(ride => ({
        name: ride.name,
        waitTime: ride.wait_time
      }));
      setWaitTimes(rides);
    } catch (error) {
      console.error('Error fetching wait times:', error);
    }
  };

  return (
    <div className="theme-parks-container">
      <h1>{themePark.charAt(0).toUpperCase() + themePark.slice(1)} Wait Times</h1>
      <div className="content">
        <div className="ride-table">
          <RideTable rides={waitTimes} />
        </div>
      </div>
    </div>
  );
};

export default ThemeParks;
