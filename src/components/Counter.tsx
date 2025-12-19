import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter';

export const Counter = () => {

  const { count, increaseBy, decreaseBy }  = useCounter()
    
    
    
  return (
    <>
    <div className='flex justify-center items-center'>
      <h3 className='font-bold'>contador <small> { count } </small></h3>
    </div>
      <div className='flex justify-center items-center'>
       <button 
        className='p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:600'
        onClick={() => {increaseBy(+1)}}> +1 </button> 
       <button 
        className='p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:600'
        onClick={() => {increaseBy(1)}}> -1 </button>  
     </div>
    </>
  )
}
