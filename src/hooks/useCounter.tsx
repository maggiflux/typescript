
import React, { useState } from 'react'

export const useCounter = () => {
    const [count, setCount] = useState<number>(0)

    const increaseBy = (value:number) => {
        setCount(prev => prev + value)
    };
    const decreaseBy = (value:number) => {
        setCount(prev => - value )
    };

  return {
    //properties,
    count,

    //actions
    increaseBy, 
    decreaseBy
  }
}
