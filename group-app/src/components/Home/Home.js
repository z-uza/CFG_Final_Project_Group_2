import DropDown from "../DropDown/DropDown";
import React, { useState } from 'react';
// import RideList from "../RidePages/RidesList";
import ExploreButton from "../ExploreButton/ExploreButton";
import AccessButton from "../AccessButton/AccessButton";
import Carousel from '../ImageCarousel/ImageCarousel.js'

import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is imported first
import '../ImageCarousel/ImageCarousel.css'; // Then import your custom CSS
import './Home.css'


function Home() {
    return (
      <div className="home-container">
          <h1>Fun Times 4 All</h1>
          <hr /> 
        <div className="button-container">
        <AccessButton className="custom-btn" />
        </div>
        <Carousel />
        <div className="button-container">
          <DropDown className="custom-btn" />
          <ExploreButton className="custom-btn" />
          
        </div>
      </div>
    );
  }

export default Home;

