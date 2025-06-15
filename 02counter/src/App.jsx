import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useState(5)
let [counter, setCount] = useState(5)
  
// let counter = 5
const addvalue=()=>{
  
 if (counter >= 20) {
    alert("Counter value cannot exceed 20");
    return;
  }
  setCount(counter + 1)
 
}
const Removevalue=()=>{
  if (counter === 0) {
    alert("Counter value cannot be less than  0");
    return;
  }
  setCount(counter - 1)
  
}
  return (
    <>
     <h1>faij aur react</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addvalue}
     >Add value {counter}</button>
     <br />
     <button onClick={Removevalue}
     >Remove value {counter}</button>
    </>
  )
}

export default App
