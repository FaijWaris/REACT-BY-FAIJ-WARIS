import { useState,useCallback,useEffect,useRef  } from 'react'



function App() {
  const [length, setlength] = useState(8);
  const[number,setnumber]= useState(false);
  const[charallow,setcharallow]= useState(false);
  const[password,setpassword]= useState("");
  // useRef to store the previous password value
  const passwordRef=useRef(null)
  const passwordGenrator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number){
      str+="0123456789";
    }
     if(charallow){
      str+="!@#$%^&*()_+[]{}|;:,.<>?";
    }
    for(let i=1;i<=length;i++){
     let char =Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setpassword(pass);
  },[length,number,charallow,setpassword] )
  const copypasswordtoclipboard=useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101); // For mobile devices
    window.navigator.clipboard.writeText(password)
  },[password])
useEffect(() => {
  passwordGenrator();
},[length,number,charallow,passwordGenrator]);
  
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
      <h1 className="text-2xl font-bold text-center my-4 p-4 ">Password Generator</h1>
      <div className='className="flex shadow rounded-lg overlow-hidden mb-4"'>
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3 rounded-lg mb-4 "
        placeholder="Genrate Password "
        readOnly
        ref={passwordRef}
         />
         <button onClick={copypasswordtoclipboard} className='outline-none px-4 py-1 rounded-full text-white shadow-lg mb-4' style={{ backgroundColor: "blue" }}>Copy
         </button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-3'>
         <input type="range" 
         min={6}
         max={100}
          value={length}
          className='cursor-pointer '
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label className='text-orange'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-3'>
          <input type="checkbox"
            defaultChecked={number}
            onChange={() => {setnumber((prev)=> !prev)}}
            className='cursor-pointer'
            />
            <label className='text-orange'>Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-3'>
          <input type="checkbox"
            defaultChecked={charallow}
            onChange={() => {setcharallow((prev)=> !prev)}}
            className='cursor-pointer'
            />
            <label className='text-orange'>Include Special Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
