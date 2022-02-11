import React from 'react';
import Navbar from "./components/NavBar/NavBar";
import ItemList from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
    <Navbar/>
    <div> <ItemList/> </div>
    </div>
    </React.Fragment>
  );
}

export default App;
