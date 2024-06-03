import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AccessDropDown.css';

//put in Access const [displayResults, setDisplay results] = useState()
function AccessDropDown({ value, onChange }) {
    
  return (
    <div id="dropdown-container">
    <Dropdown className='custom-dropdown-menu' onSelect={function(evt){onChange(evt)}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose theme park 
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-items">
        <Dropdown.Item eventKey="1">Legoland</Dropdown.Item>
        <Dropdown.Item eventKey="2">Thorpe Park</Dropdown.Item>
        <Dropdown.Item eventKey="3">Chessington World of Adventures</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default AccessDropDown;