import About from './components/About/About';
import Home from './components/Home/Home';
import RidePages from './components/RidePages/Rides';
import DrawerAppBar from './components/Nav/Navigation';
import Favourites from './components/Favourites/Favourites';
import Access from './components/Access/Access';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/DropDown/DropDown.css';
import './components/ImageCarousel/ImageCarousel.css'; 
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter> 
        <div className="App">
          <DrawerAppBar /> 
          <Routes> 
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/about" element={<About />} />
            <Route path="/access" element={<Access />} />
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
