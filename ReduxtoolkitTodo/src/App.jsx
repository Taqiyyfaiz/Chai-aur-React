import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './Componenets/Addtodo'
import Todos from './Componenets/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about Redux ToolKit</h1>
      <Addtodo />
      <Todos />
    </>
  )
}

export default App
