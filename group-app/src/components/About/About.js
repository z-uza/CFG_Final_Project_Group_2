import BethImage from '../../assets/Team Images/Beth.png'
import MajellaImage from '../../assets/Team Images/Majella.png'
import BronwenImage from '../../assets/Team Images/Bronwen.png'
import ZuzaImage from '../../assets/Team Images/Zuza.png'

import TeamCards from './TeamCards';
import './About.css'

function About() {
    const teamMembers = [
        { name: 'Beth', image: '../../assets/Team Images/Beth.png'},
        { name: 'Bronwen', image: '../../assets/Team Images/Majella.png' },
        { name: 'Majella', image: '../../assets/Team Images/Bronwen.png' },
        { name: 'Sarah', image: '../../assets/Team Images/Bronwen.png' },
        { name: 'Warda', image: '../../assets/Team Images/Bronwen.png' },
        { name: 'Zuzanna', image: '../../assets/Team Images/Bronwen.png' },
    ];

    return (
        <div className="cards-container"> 
        <TeamCards 
        title="Beth" 
        imgSrc={BethImage}
        text="Need to decide what to put here"
        buttonText="github link?" />
        
        <TeamCards 
        title="Majella" 
        imgSrc={MajellaImage}
        text="Need to decide what to put here"
        buttonText="github link?" />

        <TeamCards 
        title="Bronwen" 
        imgSrc={BronwenImage}
        text="Need to decide what to put here"
        buttonText="github link?" />
        </div>
    );
}

export default About;