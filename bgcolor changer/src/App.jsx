import { useState } from 'react'

export default function App() {

  let [color,setColor] = useState("black");

  return (
    <div className='h-screen duration-200' style={{backgroundColor: color}}>
      <div className="fixed flex justify-center w-full bottom-12">
        <div className='flex  bg-[#ffffff] text-white font-semibold p-2 rounded-2xl gap-2'>
          <button className='px-5 py-1 rounded-full' style={{backgroundColor: "red"}} 
            onClick={()=>setColor("red")}>Red</button>
          <button className='px-5 py-1 rounded-full' style={{backgroundColor: "green"}}
             onClick={()=>setColor("green")}>Green</button>
          <button className='px-5 py-1 rounded-full' style={{backgroundColor: "blue"}}
             onClick={()=>setColor("blue")}>Blue</button>
          <button className='px-5 py-1 rounded-full text-black' style={{backgroundColor: "yellow"}}
             onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='px-5 py-1 rounded-full text-black shadow-xl' style={{backgroundColor: "pink"}}
             onClick={()=>setColor("pink")}>Pink</button>
          <button className='px-5 py-1 rounded-full' style={{backgroundColor: "purple"}}
             onClick={()=>setColor("purple")}>Purple</button>
          <button className='px-5 py-1 rounded-full' style={{backgroundColor: "black"}}
             onClick={()=>setColor("black")}>Black</button>
        </div>
      </div>
    </div>
  )
}