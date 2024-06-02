import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function WaitTimePage() {
  const { parkName } = useParams(); // Get the parkName parameter from the URL
  const [waitTime, setWaitTime] = useState(null);

  useEffect(() => {
    // Fetch wait time for the selected theme park
    fetchWaitTime(parkName);
  }, [parkName]);

  const fetchWaitTime = async (parkName) => {
    try {
      const response = await fetch(`https://queue-times.com/parks/${parkName}/queue_times.json`);
      if (!response.ok) {
        // adding more specific HTTP errors
        if (response.status === 404) {
          throw new Error('Park not found');
        } else if (response.status === 500) {
          throw new Error('Server error, please try again later');
        } else {
          throw new Error('Failed to fetch wait time');
        }
      }
      const data = await response.json();
      setWaitTime(data);
    } catch (error) {
      console.error('Error fetching wait time:', error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Wait Time for {parkName}</h2>
      {waitTime ? (
        <p>Current wait time: {waitTime.wait_time} minutes</p>
      ) : (
        <p>Loading wait time...</p>
      )}
    </div>
  );
}

export default WaitTimePage;