import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
      <Msg name="Madhav" pic="pic2.jpg" />
      <Msg name="Max" pic="pic1.png" />
      <Msg name="Muller" pic="pic3.jpg" />
    
    </div>
  );
}

function Msg({ name, pic }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <img src={pic} alt="Girl in a jacket" width="150" height="150"></img>
    </div>
  );
}

export default App;





