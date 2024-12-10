import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  let [counter,setCounter] =useState(0)
 const addValue=()=>{
  if(counter<20)
  {
  counter+=1
  }
  setCounter(counter)
 }
 const decValue=()=>{
  if(counter>0)
  {
  counter-=1
  }
  setCounter(counter)
 }


  return (
    <>
      <h1 className="text-20xl">Chai and react</h1>
      <h2 className="bg-white text-black">Counter value: {counter}</h2>
      <button className="bg-green-700 m-4" onClick={addValue}> Add value</button>
      <br />
      <button className="bg-red-700 " onClick={decValue}>Decrease value</button>
      <Card username="sumit"/>
      <Card username="sumit001"/>
    </>
  )
}

export default App
