import { useState } from "react"
function App() {
  const [color,setcolor]= useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
     >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setcolor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
          >Red</button>
          <button onClick={()=>{setcolor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
          >Green</button>
          <button onClick={()=>{setcolor("Yellow")}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "Yellow" }}
          >Yellow</button>
          <button onClick={()=>{setcolor("Blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Blue" }}
          >Blue</button>
          <button onClick={()=>{setcolor("Black") }} style={{ backgroundColor: "black" }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >Black</button>
          <button onClick={()=>{setcolor("White")}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "White" }}
          >White</button>
        </div>
      </div>
     </div>
  )
}

export default App
