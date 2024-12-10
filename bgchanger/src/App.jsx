import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>

    <div className='w-full h-screen ' style={{ backgroundColor: color }}>
    <div className=' fixed flex flex-wrap bg-black   text-white  justify-centre top-12  insert-x-0 rounded-3xl px-3 py-2  '>
    <div>
    <button  onClick={()=> setColor("red")} className='bg-red-700 rounded-full m-4 p-2 '>red</button>
    <button  onClick={()=> setColor("orange")} className='bg-orange-700 rounded-full m-4 p-2'>orange</button>
    <button  onClick={()=> setColor("green")} className='bg-green-700 rounded-full m-4 p-2'>green</button>
    <button  onClick={()=> setColor("yellow")} className='bg-yellow-700 rounded-full m-4 p-2'>yellow</button>
    <button  onClick={()=> setColor("violet")} className='bg-violet-700 rounded-full m-4 p-2'>violet</button>
    <button  onClick={()=> setColor("indigo")} className='bg-indigo-700 rounded-full m-4 p-2'>indigo</button>
    <button  onClick={()=> setColor("blue")} className='bg-blue-700 rounded-full m-4 p-2'>blue</button>

    </div>
    </div>
    </div></>
  )
}

export default App
