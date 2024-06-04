import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DropDown.css';

function DropDown({ onSelectThemePark }) {
  return (
    <div id="dropdown-container">
      <Dropdown className='custom-dropdown-menu' onSelect={onSelectThemePark}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose theme park
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-items">
          <Dropdown.Item eventKey="legoland">Legoland</Dropdown.Item>
          <Dropdown.Item eventKey="thorpe-park">Thorpe Park</Dropdown.Item>
          <Dropdown.Item eventKey="chessington">Chessington World of Adventures</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropDown;
