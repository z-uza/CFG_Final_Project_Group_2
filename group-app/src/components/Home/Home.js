import React from 'react';
import DropDown from "../DropDown/DropDown";
import ExploreButton from "../ExploreButton/ExploreButton";
import Carousel from '../ImageCarousel/ImageCarousel.js';

import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is imported first
import '../ImageCarousel/ImageCarousel.css'; // Then import your custom CSS
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1 className="title">Theme Park Waiting Times!</h1>
            <hr />
            <Carousel />
            <div className="button-container">
                <DropDown className="custom-btn" style={{ marginRight: '30px' }} />
                <ExploreButton className="custom-btn" />
            </div>
        </div>
    );
}

export default Home;
