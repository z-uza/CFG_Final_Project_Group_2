import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './favouritesList.css'
import { TiHeartFullOutline } from "react-icons/ti";

const RenderFavouriteRides = ({ favourites }) => { // pass in favourites
  return (
    <>
      <h1> Here are your favourite rides... </h1>
      <div className="custom-list">
        <ListGroup>
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