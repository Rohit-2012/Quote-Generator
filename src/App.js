import React, {useState} from "react";
import "./style.css";
import quotes from './quotes.js'

export default function App() {
  const [index, setIndex] = useState(0)
  const handleChange = ()=>{
    setIndex(Math.floor(Math.random()*10))
  }

  return (
    <div className ='mainBox'>
      <span>{quotes[index].quote}</span>
      <p>-{quotes[index].by}</p>
      <button onClick = {handleChange}>Change Quote</button>
    </div>
  );
}
