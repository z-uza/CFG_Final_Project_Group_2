import React from 'react';
import About from './components/About/About';
import Home from './components/Home/Home'
import ThemeParks from './components/RidePages/Rides'; // Ensure the path is correct
import NavBar from './components/Nav/Navigation';
import DrawerAppBar from './components/Nav/Navigation';
import Access from './components/Access/Access';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
          <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favourites" element={<RetrieveFavourites />} />
            <Route path="/about" element={<About />} />
            <Route path="/access" element={<Access />} />
            <Route path="/theme-parks/:themePark" element={<ThemeParks />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;

