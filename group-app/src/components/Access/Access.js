import AccessDropDown from "../AccessDropDown/AccessDropDown";
import React, { useState } from 'react';
// import RideList from "../RidePages/RidesList";
import AccessButton from "../AccessButton/AccessButton";


import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is imported first
import './Access.css'
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../../assets/main carousel images', false, /\.(png|jpe?g|svg)$/));

function Access() {
  const [currentThemePark, setCurrentThemePark] = useState('');
  //state variable insert here
  //when change drop down will change variable
  //if statements with dropdown display id
    return (
      <div className="access-container">
        <div>
          <h1> Theme Park Accessibility </h1>
        </div>
        <div className="button-container">
          <AccessDropDown className="custom-btn" onChange={setCurrentThemePark}/>
        </div>     
        {currentThemePark==="2" &&
        <div class="row">
          <div class="column">
            <p id="thorpeParkInfo" class="parkInfo">
            <ul>Thorpe Park Sat Nav Address:</ul>
            <ul>THORPE PARK Resort, Staines Road,
                Chertsey, Surrey, KT16 8PN 
            </ul>
            <ul>Opening Times:
                <li>Mon to Fri: 10 am to 5 pm </li>
                <li>Sat to Sun: 10 am to 6 pm </li>
            </ul>
              <ul>Support for Access:
                <li>App available </li>
                <li>Disabled changing places</li>
                <li>Ride Access Pass</li>
                <li>Missing limbs or amputation info</li>
                <li>Accessible toilets</li>
                <li>Wheelchair hire</li>
                <li>Mobility Scooter Hire</li>
                <li>Pushchair and buggy hire</li>
                <li>Ear defenders available</li>
                <li>First aid</li>
                <li>Accessibility Kiosk</li>
              </ul>
            </p>
          </div>
          <div class="column">
            <img className="parkAccessPic" src={require("../../assets/main carousel images/THORPE_Img3.jpg")} alt={"ride at thorpe park"}/>
          </div>
        </div>
       }
       {currentThemePark==="3" &&            
       <div class="row">
        <div class="column">
          <p id="chessingtonInfo" class="parkInfo">
            <ul>Chessington Sat Nav Address:</ul>
              <ul>Chessington World of Adventures Resort
                  Leatherhead Road,
                  Chessington, Surrey
                  KT9 2NE</ul>
                        
            <ul>Opening Times:
                <li>Sun to Fri: 10 am to 5 pm </li>
                <li>Sat: 10 am to 6 pm </li>
            </ul>
          
              <ul>Support for Access:
                <li>Quiet Places</li>
                <li>Queue free attractions</li>
                <li>Ride Access Pass Hub</li>
                <li>Can reserve ride statements</li>
                <li>Accessible toilets</li>
                <li>Wheelchair hire</li>
                <li>Mobility Scooter Hire</li>
                <li>Wheelchair accessible shops</li>
                <li>Wheelchair accessible Restaurants</li>
                <li>First aid Centre</li>
                <li>Accessibile changing facilities</li>
                <li>Assistance dogs welcome</li>
              </ul>
            </p>
          </div>
          <div class="column">
            <img className="parkAccessPic2" src={require("../../assets/main carousel images/CH_Img3.jpg")} alt={"rollercoaster at Chessington"} />
          </div>
       </div>
       }
       {currentThemePark==="1" && 
        <div class="row">
          <div class="column">   
            <p id="legolandInfo" class="parkInfo">
              <ul>Legoland Sat Nav Address:</ul>
                  <ul>LegoLand Theme Park, Winkfield Road, Windsor
                  Berkshire, SL4 4AY</ul>
              <ul>Opening Times:
                  <li>Mon to Fri: 10 am to 5 pm </li>
                  <li>Sat to Sun: 10 am to 6 pm </li>
              </ul>
              <ul>Support for Access:
                <li>App available</li>
                <li>Acccessibility Experience Team </li>
                <li>Blue Badge parking & Carer free access</li>
                <li>All shops & restaurants wheelchair accessible</li>
                <li>Sensory room in Heartlake City</li>
                <li>Queue free attractions</li>
                <li>Missing limbs or amputation info</li>
                <li>Accessible toilets</li>
                <li>Wheelchair hire & Wheelchair friendly paths</li>
                <li>Mobility Scooter & buggy Hire</li>
                <li>Ear defenders available</li>
                <li>First aid Team & Medication Storage</li>
                <li>Assistance and emotional support dogs welcome</li>
              </ul>
            </p>
          </div>  
          <div class="column">
            <img className="parkAccessPic3" src={require("../../assets/main carousel images/LEGO_Img4.jpg")} alt={"family at LegoLand"} />
          </div>
        </div>
        }
      </div>   
    );
  }

 export default Access;
