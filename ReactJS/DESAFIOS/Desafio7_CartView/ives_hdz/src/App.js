import './App.css';
import './Ives.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {  

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryName' element={<ItemListContainer  />} />
              <Route path='/detail/:productID' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart /> } />
            </Routes>
          </main>
          <footer>
            <h3>Desafío 7 - Erendira Hernández</h3>
            <p>
              Cart View
            </p>
          </footer>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
