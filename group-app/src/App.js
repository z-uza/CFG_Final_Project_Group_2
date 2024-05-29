import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home'
import Rides from './components/RidePages/Rides';
import DrawerAppBar from './components/Nav/Navigation';
import Favourites from './components/Favourites/Favourites';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/DropDown/DropDown.css';
import './components/ImageCarousel/ImageCarousel.css'; 
import './App.css';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">

        <DrawerAppBar /> 

        <Routes> 
        <Route path ="/favourites" element={<Favourites />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/rides" element={<Rides />} />
        <Route path="*" element={<Home />} />
        </Routes>

      </div>
    </BrowserRouter> 

  );
}

export default App;




