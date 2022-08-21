import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const users = [
    {
      title:"Madhav", pic:"pic2.jpg"
    },
    {
      title:"Nelly", pic:"pic1.png"
    },
    {
      title:"Muller", pic:"pic3.jpg"
    },
  ];

  return (
    <div className="App">

      {users.map(({title, pic}) => (
          <Msg name={title} pic={pic} />
        ))}
     
      { /*<Msg name="Madhav" pic="pic2.jpg" />
      <Msg name="Max" pic="pic1.png" />
      <Msg name="Muller" pic="pic3.jpg" /> */
    }
      {/*<Counter/>*/}
    
    </div>
  );
}

function Msg({ name, pic }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <img src={pic} alt="Hypothetical Alt text" width="150" height="150"></img>
      <Counter/>
    </div>
  );
}

function Counter() {

  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const styles = {
        color: like > 20 ? "orange" : "blue"
  }
  return (
    <div>
      {
        /* Conditional Rendering */
      }
      {like >= 10 ? <h1 style={styles}> You have won people's ❤️😍😎 </h1> : null}
      {
        /* Progress bar */
      }
      
      {  /* onClick camel case */
      }
      <button onClick={()=>{ setLike(like + 1)}}>👌 {like}</button>
      <button onClick={()=>{ setDisLike(disLike + 1)}}>👎 {disLike}</button>
      <progress max={100} value={(like/(like + disLike)) * 100}></progress>
      </div>
  )

}

export default App;





