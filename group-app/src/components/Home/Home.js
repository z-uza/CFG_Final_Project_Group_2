import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from "../DropDown/DropDown";
import ExploreButton from "../ExploreButton/ExploreButton";
import AccessButton from "../AccessButton/AccessButton";
import Carousel from '../ImageCarousel/ImageCarousel.js';

import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is imported first
import '../ImageCarousel/ImageCarousel.css'; // Then import your custom CSS
import './Home.css';

function Home() {
  const [selectedThemePark, setSelectedThemePark] = useState('');
  const navigate = useNavigate();

  const handleExploreClick = () => {
    if (selectedThemePark) {
      navigate(`/theme-parks/${selectedThemePark}`);
    } else {
      console.log('No theme park selected');
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">Theme Park Waiting Times!</h1>
      <hr />
      <div className="button-container">
        <AccessButton className="custom-btn" />
      </div>
      <Carousel />
      <div className="button-container">
        <DropDown className="custom-btn" style={{ marginRight: '30px' }} onSelectThemePark={(eventKey) => {
          console.log('Selected theme park:', eventKey);
          setSelectedThemePark(eventKey);
        }} />
        <ExploreButton className="custom-btn" onClick={handleExploreClick} />
      </div>
    </div>
  );
}

export default Home;
