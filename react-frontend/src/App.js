import React from 'react';
import './App.css';
import {useEffect} from "react"

function App() {

  useEffect(() => {
    fetch("http://localhost:9290/test")
  .then((r) => r.json())
  .then((data) => console.log("hello"));
  },[])

  return (
    <div className="App">
      <h1>GoodBye</h1>
    </div>
  )
}

export default App;
