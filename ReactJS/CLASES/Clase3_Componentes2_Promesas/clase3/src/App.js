import React, {useState} from 'react'
import './App.css';
import Counter from './componets/Counter/Counter'

function App() {
  const [show, setShow] = useState(true);

  const handleAdd = ()=>{
    console.log(`se ejecuto APP`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CLASE 3 - Componentes II, Promises, asincronía y MAP</h1>
        <p>
            <button onClick={()=>setShow(!show)}>show/hide</button>
            {show && <Counter initial={10} stock={50} onAdd = {handleAdd}/>}
        </p>
      </header>
    </div>
  );
}

export default App;
