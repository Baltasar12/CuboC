import React from 'react';
import {CartProvider} from "react-use-cart";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <React.Fragment>
    
    <Navbar/>
    <>
    <CartProvider>
    <ItemListContainer/>
    <ItemCount/>
    </CartProvider>
    </>
    </React.Fragment>
  );
}

export default App;
