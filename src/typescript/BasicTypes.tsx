import React from 'react'

export const BasicTypes = () => {

  const name: string = 'mary'
  const age: number = 38
  const isActive: boolean = true
  
  const powers: string[] = ['REACT', 'REACT NATIVE']


  return (
    <>
      <h3>
        Tipos básicos {name}, {age}, {isActive ? 'true' : 'flase'}
      </h3>
      <p>
        {powers.join(' , ')}
      </p>
    </>
  )
}
