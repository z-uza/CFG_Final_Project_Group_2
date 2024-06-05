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

        <div>        
        {currentThemePark==="2" &&
          <div>
          <p id="thorpeParkInfo" class="parkInfo">
            <ul>Thorpe Park Support for Access:
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
          <p id="thorpeParkAddressTimes" class="parkInfo">
          <ul>Thorpe Park Sat Nav Address:
              <li>THORPE PARK Resort, Staines Road, </li>
              <li>Chertsey, Surrey, KT16 8PN </li>
          </ul>
          <ul>Opening Times:
              <li>Mon to Fri: 10 am to 5 pm </li>
              <li>Sat to Sun: 10 am to 6 pm </li>
          </ul>
          </p>
          <img className="parkAccessPic" src={require("../../assets/main carousel images/THORPE_Img3.jpg")} alt={"ride at thorpe park"}/>
          </div>
       }
       {currentThemePark==="3" &&            
       <div>
       <p id="chessingtonInfo" class="parkInfo">
       <ul>Chessington Support for Access:
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
     
     <p id="chessingtonAddressTimes" class="parkInfo">
       Chessington Sat Nav Address:<br/>
             Chessington World of Adventures Resort <br/>
             Leatherhead Road <br/>
             Chessington <br/>
             Surrey <br/>
             KT9 2NE<br/>
        <br/> 
         
     <ul>Chessington Opening Times:
         <li>Sun to Fri: 10 am to 5 pm </li>
         <li>Sat: 10 am to 6 pm </li>
     </ul>
     </p>
     <img className="parkAccessPic" src={require("../../assets/main carousel images/CH_Img3.jpg")} alt={"rollercoaster at Chessington"} />
     </div>
       }
       {currentThemePark==="1" && 
       <div>      
        <p id="legolandInfo" class="parkInfo">
          <ul>Legoland Support for Access:
            <li>App available</li>
            <li>Acccessibility Experience Team </li>
            <li>Blue Badge parking</li>
            <li>Carer free access </li>
            <li>All shops wheelchair accessible</li>
            <li>Restaurants wheelchair accessible</li>
            <li>Acccessibility Experience Team </li>
            <li>Sensory room in Heartlake City</li>
            <li>Access to ear defenders</li>
            <li>Queue free attractions</li>
            <li>Missing limbs or amputation info</li>
            <li>Accessible toilets</li>
            <li>Wheelchair hire</li>
            <li>Wheelchair friendly paths</li>
            <li>Mobility Scooter Hire</li>
            <li>Pushchair and buggy hire</li>
            <li>Ear defenders available</li>
            <li>First aid Team</li>
            <li>Medication Storage</li>
            <li>Assistance and emotional support dogs welcome</li>
          </ul>
        </p>
        <p id="legolandAddressTimes" class="parkInfo">
        <ul>Legoland Sat Nav Address:
            <li>LegoLand Theme Park, Winkfield Road, Windsor</li>
            <li>Berkshire, SL4 4AY</li>
        </ul>
        <ul>Opening Times:
            <li>Mon to Fri: 10 am to 5 pm </li>
            <li>Sat to Sun: 10 am to 6 pm </li>
        </ul>
        </p>
        <img className="parkAccessPic" src={require("../../assets/main carousel images/LEGO_Img4.jpg")} alt={"family at LegoLand"} />
        </div>
       }
        </div>
      </div>
      );
    }
      
 export default Access;





