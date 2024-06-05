import React from 'react';
import BethImage from '../../assets/Team Images/Beth.png';
import MajellaImage from '../../assets/Team Images/Majella.png';
import BronwenImage from '../../assets/Team Images/Bronwen.png';
import ZuzaImage from '../../assets/Team Images/Zuza.png';

import TeamCards from './TeamCards';
import './About.css';

function About() {
  return (
    <div className="cards-container">
      <TeamCards 
        title="Beth" 
        imgSrc={BethImage}
        text="Need to decide what to put here"
        buttonText="GitHub Link"
        link="https://github.com/bhpla9" 
      />
      
      <TeamCards 
        title="Majella" 
        imgSrc={MajellaImage}
        text="Need to decide what to put here"
        buttonText="GitHub Link"
        link="https://github.com/MadgeMom" 
      />

      <TeamCards 
        title="Bronwen" 
        imgSrc={BronwenImage}
        text="Need to decide what to put here"
        buttonText="GitHub Link"
        link="https://github.com/brongrainger" 
      />

      <TeamCards 
        title="Zuza" 
        imgSrc={ZuzaImage}
        text="Need to decide what to put here"
        buttonText="GitHub Link"
        link="https://github.com/z-uza" 
      />
    </div>
  );
}

export default About;
