import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwrdref=useRef(null)

  const passwordGenrator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)
    {
      str+="0123456789"
    }
    if(charAllowed)
    {
        str+="!@#$%^&*()_+{}[]~'"
    }
    for(let i=0;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copypwd=useCallback(()=>{
    passwrdref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenrator()},[length,numberAllowed,charAllowed,passwordGenrator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-600'>
    <h1 className=' text-white text-center my-3'> Password Genrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwrdref}/>
      <button onClick={copypwd} className='outline-none bg-blue-700 hover:bg-blue-600  text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input type="range" min={8} max={18} value={length} onChange={(e)=>{setLength(e.target.value)}} className='cursor-pointer' /> 
        <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
          setNumberAllowed((prev)=> !prev);
        }} />
        <label htmlFor='numberInput'>Numbers</label>
        </div>
        
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{
          setCharAllowed((prev)=> !prev);
        }} />
        <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
