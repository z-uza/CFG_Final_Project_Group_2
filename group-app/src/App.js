import React from 'react';
import About from './components/About/About';
import ThemeParks from './components/RidePages/Rides'; 
import NavBar from './components/Nav/Navigation';
import Access from './components/Access/Access';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import RetrieveFavourites from './components/Favourites/RetrieveFavourites'

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/DropDown/DropDown.css';
import './components/ImageCarousel/ImageCarousel.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<RetrieveFavourites />} />
            <Route path="/about" element={<About />} />
            <Route path="/access" element={<Access />} />
            <Route path="/theme-parks/:themePark" element={<ThemeParks />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="centered-container">
            <a
              className="App-link"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on GitHub
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;

