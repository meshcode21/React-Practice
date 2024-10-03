import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  let [length, setLength] = useState(12);
  let [numAllowed,setnumAllowed] = useState(false);
  let [charAllowed,setcharAllowed] = useState(false);
  let [password,setPassword] = useState("mahesh");

  // const passwordGenerator = useCallback(()=>{
  //   const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   const pass = "";

  //   if(numAllowed) str += "0123456789";
  //   if(charAllowed) str += "!@#$%^&*+/<>";

  //   for(i=1; i<=length; i++){
  //     index = Math.ceil(Math.random()*str.length);
  //     pass += str.charAt(index);
  //   }

  //   setPassword(pass);

  // },[length,numAllowed,charAllowed,setPassword]);

  const passRef = useRef();

  useEffect(()=>{
    document.getElementById('copyBtn').innerText = "copy"
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    let index = 0;

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*+/<>";

    for(let i=1; i<=length; i++){
      index = Math.ceil(Math.random()*str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  },[length,numAllowed,charAllowed]); 

  const copyPassword = ()=>{
    if(window.navigator.clipboard.writeText(password)){
      document.getElementById('copyBtn').innerText = "copyed";
      passRef.current?.select();
    }
    else alert("Cant copy");  
  }

  return (
    <>
      <div className='w-1/2 bg-slate-700 mx-auto my-10 rounded-2xl flex flex-col p-10 text-[#d4c326]'>
        <h1 className='text-white text-3xl text-center mb-5'>Password Generator</h1>
        <div className='w-full flex rounded-2xl overflow-auto'>
          <input className='text-2xl font-medium p-3 w-full outline-none text-[#424242]' ref={passRef} value={password} type="text" readOnly/>
          <button id='copyBtn' className='bg-blue-700 text-white text-xl px-5' onClick={copyPassword}>copy</button>
        </div>
        <div className='h-[50px] flex items-center justify-between flex-wrap'>
          <div className='flex mx-5'>
            <input className='cursor-pointer' type="range" min={10} max={50} value={length} onChange={(e) =>{setLength(e.target.value)}}/> 
            <label className='text-xl p-1'>Length : {length}</label>
          </div>
          <div>
            <input type="checkbox" id="numberAllow" onChange={()=>{setnumAllowed((numAllowed) => !numAllowed)}}/><label htmlFor="numberAllow" className='text-xl p-1'>Numbers</label>
          </div>
          <div>
            <input type="checkbox" id="charAllow" onChange={()=>{setcharAllowed((charAllowed) => !charAllowed)}}/><label htmlFor="charAllow" className='text-xl p-1'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
