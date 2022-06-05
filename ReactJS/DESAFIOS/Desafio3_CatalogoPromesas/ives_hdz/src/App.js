import logo from './logo.svg';
import './App.css';
import './Ives.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
          <ItemListContainer title="LISTA DE PRODUCTOS"/>
      </main>
      <footer>
      <h3>Desafío 3 - Erendira Hernández</h3>
        <p>
          Catálogo con Maps y Promises
        </p>
      </footer>
    </div>
  );
}

export default App;
