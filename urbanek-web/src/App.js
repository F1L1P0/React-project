import './App.scss';
import Header from "./components/Header.js";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Part1 from "./components/Part1";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link} from "react-router-dom"; 
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="app">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/About" component={About}/>
      <Part1/>
    </div>
  );
}

export default App;
