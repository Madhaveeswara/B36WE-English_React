import logo from './logo.svg';
import './App.css';

function App() {

  const users = [
    {
      title:"Madhav",
      pic:"pic2.jpg"
    },
    {
      title:"Nelly",
      pic:"pic1.jpg"
    },
    {
      title:"Muller",
      pic:"pic3.jpg"
    },
  ]
  return (
    <div className="App">

      {
        users.map(({title, pic}) => {
          <Msg name={title} pic={pic} />
        })
      }
     
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
      <img src={pic} alt="Hypothetical Alt text" width="150" height="150"></img>
    </div>
  );
}

export default App;





