import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from Group 2</h1>
        <p className='App-Para'> We are:
          <li>Beth</li>
          <li>Bronwen</li>
          <li>Majella</li>
          <li>Sarah</li>
          <li>Warda</li>
          <li>Zuzanna</li>
        </p>
        <img src="../CFG_logo.png" className="App-logo" alt="logo" />
        <h2>Our Hobbies and Interests</h2>
        
        <p className='App-Para'> <span class ="App-bolded">Majella: </span>my favourite thing to do is cold water swimming in either lakes or the sea. It doesn't always involve 
          serious swimming though, sometimes its a more of a chill and a good natter with friends.I do this 
          all year round and absolutely love it! Why do I do this? Because it feels incredible!!  In fact as you build
          tolerance it is actually quite addictive.  I try to get to the beach at sunrise before work and it's just the 
          a beautiful way to start the day.  
          
        </p>

        <p className='App-Para'> <span class ="App-bolded">Zuzanna: </span>My favourite thing to do is backpacking the world, 
        I’ve been travelling and working remotely for the last two years and hope to continue! 
        I love immersing myself in different cultures and slowly discovering a new place. 
        I’m learning Spanish to spend some time in Central and South America. 
        </p>

        <p className='App-Para'> <span class ="App-bolded">Beth: </span> My favourite thing to do is running. It sounds crazy but I love both the mental and physical challenge. I completed Manchester Marathon a
        few years ago and I am running the London Marathon in 2025. I am part of my local running club [St. Albans Striders] and also really enjoy the social side of it too.
        </p>

        <p className='App-Para'> <span class ="App-bolded">Bronwen: </span> My favourite thing to do is play volleyball, I like not only the enjoyment of winning but coming together as a team. I am also a beautiful
        of a thrill seaker and would like to get my sky diving license in the next few years so I can do solo sky dives.
        </p>


        <a
          className="App-link"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find us on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
