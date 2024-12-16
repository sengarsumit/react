import { useState } from 'react'
import AddTodos from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {


  return (
    <>
      <h1>Learn redux</h1>
      <AddTodos/>
      <Todos/>
    </>
  )
}

export default App
