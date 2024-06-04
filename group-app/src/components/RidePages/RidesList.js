// Build dynamic component that allows you to pass in name

import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function RideList({ rides }) {
  return (
    <div>
      <h2>Available Rides</h2>
      <ListGroup>
        {rides.map((ride, index) => (
          <ListGroup.Item key={index}>{ride}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}