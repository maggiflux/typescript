import { useState } from 'react'
import './App.css'
import { BasicFunctions } from './typescript/BasicFunctions'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiteral } from './typescript/ObjectLiteral'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      <BasicTypes />
      <ObjectLiteral />
      <BasicFunctions />
    </>
  )
}

export default App
