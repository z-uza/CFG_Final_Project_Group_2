import React from 'react';
import BethImage from '../../assets/Team Images/Beth.png';
import MajellaImage from '../../assets/Team Images/Majella.png';
import BronwenImage from '../../assets/Team Images/Bronwen.png';
import ZuzaImage from '../../assets/Team Images/Zuza.png';
import WardaImage from '../../assets/Team Images/Warda.jpg';
import SarahImage from '../../assets/Team Images/Sarah.jpg';
import TeamCards from './TeamCards';
import './About.css';

function About() {
  return (
    <div className="cards-container">
      <TeamCards 
        title="Beth" 
        imgSrc={BethImage}
        text="My favourite thing to do is running. It sounds crazy but I love both the mental and physical challenge."
        buttonText="GitHub Link"
        link="https://github.com/bhpla9" 
      />
      
      <TeamCards 
        title="Majella" 
        imgSrc={MajellaImage}
        text="My favourite thing to do is cold water swimming in either lakes or the sea."
        buttonText="GitHub Link"
        link="https://github.com/MadgeMom" 
      />

      <TeamCards 
        title="Bronwen" 
        imgSrc={BronwenImage}
        text="My favourite thing to do is play volleyball and skydiving."
        buttonText="GitHub Link"
        link="https://github.com/brongrainger" 
      />

      <TeamCards 
        title="Zuza" 
        imgSrc={ZuzaImage}
        text="I’ve been travelling and working remotely for the last two years and hope to continue!"
        buttonText="GitHub Link"
        link="https://github.com/z-uza" 
      />


    <TeamCards 
        title="Warda" 
        imgSrc={WardaImage}
        text="My favourite thing to do is workout, and I'm an avid gym-goer."
        buttonText="GitHub Link"
        link="https://github.com/wardanot" 
      />


    <TeamCards 
        title="Sarah" 
        imgSrc={SarahImage}
        text="My favourite hobby is hiking. I love being in nature and enjoying the beauty of the outdoors"
        buttonText="GitHub Link"
        link="Sarah Pascoe" 
      />
    </div>
  );
}

export default About;
