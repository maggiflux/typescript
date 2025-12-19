/* import { useState } from 'react'
import { Counter } from './components/Counter'
import { BasicFunctions } from './typescript/BasicFunctions'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiteral } from './typescript/ObjectLiteral'
import { LoginPage } from './components/loginPage' */
import { AuthProvider } from './context/AuthContext'
import { UsersPage } from './components/UsersPage'

function App() {
  
  return (
   <AuthProvider>
  <div className="flex flex-col items-center min-h-screen">
    <h1 className="text-4xl font-bold mb-6">
      React + Ts
    </h1>

    {/* <BasicTypes /> */}
    {/* <ObjectLiteral /> */}
    {/* <BasicFunctions /> */}
    {/* <Counter /> */}
    {/* <LoginPage /> */}

    <UsersPage />
  </div>
</AuthProvider>

  )
}

export default App
