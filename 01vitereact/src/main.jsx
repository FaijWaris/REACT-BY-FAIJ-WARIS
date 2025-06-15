import React from 'react'  // ✅ Add this line
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>faij waris</h1>
    </div>
  )
}
const anotheruser="faij aur js"
const ReactElement = React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'click me to visit google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
ReactElement
)