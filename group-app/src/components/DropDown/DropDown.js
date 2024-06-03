import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DropDown.css';


function DropDown() {
  return (
    <div id="dropdown-container">
    <Dropdown className='custom-dropdown-menu'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose theme park 
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-items">
        <Dropdown.Item href="/action-1">Legoland</Dropdown.Item>
        <Dropdown.Item href="/action-2">Thorpe Park</Dropdown.Item>
        <Dropdown.Item href="/action-3">Chessington World of Adventures</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default DropDown;