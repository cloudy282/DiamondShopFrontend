import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Product from "./components/Products/Product";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:category" component={Product} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
