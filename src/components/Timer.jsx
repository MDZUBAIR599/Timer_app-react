import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Timer() {
    const[timer, setTimer]=useState(10);

    useEffect(()=>{
        const id = setInterval(() => {
            setTimer((prev)=>prev+1);
        }, 1000);

        return ()=>{
            clearInterval(id);
        }

    }, []);
    

  return (
    <div>
      count Down :{timer}
      <button onClick={()=> setTimer((timer)=> timer +1)}>+</button>
      <button onClick={()=> setTimer((timer)=> timer -1)}>-</button>
    
    </div>
  )
}

export default Timer
