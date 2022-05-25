import React from "react";
import { useState } from "react";
 
function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
const Stopwatch=()=>{
    const [timerid , setTimerid]= useState(null);
    const [watch, setwatch]= useState(1000);
    const start=()=>
    {
        if(!timerid){
            let id=setInterval(()=>{
                setwatch((prev) => prev+1000);
        
            }, 1000)
            setTimerid(id);
        }
        
    };
    const stop=()=>
    {
        clearInterval(timerid)
        setTimerid(null)
    };
    const reset=()=>
    {
        clearInterval(timerid)
        setwatch(0)
    };
return (
    <div>
      <h2>{Stopwatch}</h2>
      <h2>{msToTime(watch)}</h2>
      <div>
          <button onClick={start}>start</button>
          <button onClick={stop}>stop</button>
          <button onClick={reset}>reset</button>
      </div>
    </div>
  )

}
export default Stopwatch;
