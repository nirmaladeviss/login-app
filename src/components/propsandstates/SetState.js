import React, { useState } from 'react'

export const SetState = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
    setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        if(count > 0){
        setCount(prevCount => prevCount - 1)
        }
        else {
            alert("Value is zero")
        }
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
