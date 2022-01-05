import React from 'react';
import './App.css';
import {useEffect} from "react"

function App() {
  useEffect(() => {
    fetch("http://localhost:9292/test")
  .then((r) => r.json())
  .then((data) => console.log(data));
  },[])

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  )
}

export default App;
