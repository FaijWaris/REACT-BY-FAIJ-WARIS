import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"faij",
    age: 20,
  }
  let nearr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind Test</h1>
      <Card channel="faij waris" seemy={nearr}/>
        <Card />
    </>
  )
}

export default App
