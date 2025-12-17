import React from 'react'

const addTwoNumbers = (a: number, b: number): string => {
    return `${ a + b }` 
}

export const BasicFunctions = () => {
   


  return (
    <>
    <h3>Funciones</h3>
    <span>el resultado es {addTwoNumbers(2, 3)} </span>
    </>
  )
}
