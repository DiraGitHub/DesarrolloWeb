import React,{useState} from 'react';
import './App.css';
import './Ives.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  // const [page,setPage] = useState('list');

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
         
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ItemListContainer title='LISTA DE PRODUCTOS'/>} />
              <Route path='/detail/:productID' element={<ItemDetailContainer/>} />
            </Routes>
          </BrowserRouter>
      </main>
      <footer>
      <h3>Desafío 4 - Erendira Hernández</h3>
        <p>
          Detalle de Productos
        </p>
      </footer>
    </div>
  );
}

export default App;
