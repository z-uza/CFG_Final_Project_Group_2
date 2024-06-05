import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
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
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
            
          </Routes>
        </div>
      </BrowserRouter> 
  
  
      <div className="App">
      <header className="App-header">
        
          {/* <img src="../CFG_logo.png" className="App-logo" alt="logo" /> */}
        
        <div className="centered-container">
          
        </div>
        </header>
      </div>
    </>
  );
}

export default App;
