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
