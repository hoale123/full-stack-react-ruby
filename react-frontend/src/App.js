import React from 'react';
import './App.css';
import {useEffect} from "react"
import Products from './Products';

function App() {

  useEffect(() => {
    fetch("http://localhost:9290/test")
  .then((r) => r.json())
  .then((data) => console.log("hello"));
  },[])

  return (
    <div className="App">
      <h1>Flatiron School: Phase 3 Project</h1>
      <h3>Created by Hoa Le and Morgan Byrne</h3>
      <Products />
    </div>
  )
}

export default App;
