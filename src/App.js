import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Shoe from "./components/Products/Shoes/Shoe"
import Accessory from "./components/Products/Accessories/Accessory"
import Clothes from "./components/Products/Clothes/Clothes"

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/clothes" component={Clothes}/>
      <Route exact path="/accessories" component={Accessory}/>
      <Route exact path="/shoes" component={Shoe}/>
    </Router>
  );
}

export default App;
