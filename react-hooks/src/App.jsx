

import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("red");

  function clickHandler(){
    setColor((prev) => prev = "blue" )
    console.log("color");
  }

  const [details, setDetails] = useState({brand:"farari", model:"zxwey", year:"2025", color:"Blue"});
  function handleClick(){
    setDetails((prev) => ({...prev, color:"red"}))
    console.log("car");
  }

  return (
    <>
      <h1>React hooks</h1>
      <h1>My favourite color is {color} !</h1>
      <button onClick={clickHandler}>Blue</button>

      <h2>Car details</h2>
      <p>Car brand name: {details.brand} </p>
      <p>Car Model: {details.model} </p>
      <p>Car prodcution year: {details.year} and color is : { details.color }</p>
      <button onClick={handleClick}>change</button>
    </>
  )
}

export default App
