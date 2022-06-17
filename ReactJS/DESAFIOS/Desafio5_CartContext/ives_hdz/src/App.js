import React, { useState } from 'react';
import './App.css';
import './Ives.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/detail/:productID' element={<ItemDetailContainer />} />
          </Routes>
        </main>
        <footer>
          <h3>Desafío 4 - Erendira Hernández</h3>
          <p>
            Detalle de Productos
          </p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
