import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { TiHeartFullOutline } from "react-icons/ti";

import './FavouritesList.css'


const RenderFavouriteRides = ({ favourites }) => { // pass in favourites
  return (
    <>
      <div className="container">
      <h1> Here are your favourite rides... </h1>
        <ListGroup className="custom-list-main">
          {favourites.length > 0 ? ( 
            favourites.map((rideName, index) => (
              <ListGroup.Item key={index} className="custom-list-item">
                <TiHeartFullOutline color="red" size="30px" /> {rideName}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className="custom-list-item">
              No favourites added yet.
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </>
  );
};

export default RenderFavouriteRides;