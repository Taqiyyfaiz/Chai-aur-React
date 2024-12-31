/**
 * App.jsx
 * 
 * This file defines the main App component for the React application.
 * 
 * Imports:
 * - useState: A React hook for managing state within the component.
 * - reactLogo: An SVG image of the React logo.
 * - viteLogo: An SVG image of the Vite logo.
 * - App.css: The CSS file for styling the App component.
 * - Card: A custom component imported from the Components directory.
 * 
 * State:
 * - count: A state variable initialized to 0, managed by the useState hook.
 * - setCount: A function to update the count state variable.
 * 
 * Variables:
 * - myObj: An object containing user information (username and age).
 * 
 * JSX:
 * - The component returns a fragment containing the rendered content.
 */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Faiz",
    age: 20
  }
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="ChaiaurCode" />
      <Card username="Chai aur React"/>
    </>
  )
}

export default App
