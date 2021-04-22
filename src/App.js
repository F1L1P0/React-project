import React from "react";
import './App.scss';
import Header from "./components/Header.js";
import Home from "./components/Home";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link} from "react-router-dom"; 

function App() {
  return (
    <div className="app">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Contact" component={Contact}/>
    </div>
  );
}

export default App;
