import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(()=>{
        setTime((prevTime)=> prevTime +10);
      },10)
    }else if (!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running])

  return (
    <div className='max-w-md max-h-md flex flex-col items-center justify-center py-8'>
     <h1 className='text-2xl font-semibold pb-4'>01-Stopwatch</h1>
     <div className='text-xl font-semibold'>
      <span>{("0"+Math.floor((time/60000)%60)).slice(-2)} </span>
      <span>{("0"+Math.floor((time/1000)%60)).slice(-2)} </span>
      <span>{("0"+Math.floor((time/100)%60)).slice(-2)}</span>
     </div>
     <div className='flex flex-row justify-between gap-4'>
      { running ? 
      (<button 
      className='border rounded-lg px-2 py-1 bg-red-500 mt-6' 
      onClick={()=>{setRunning(false)}}>
        Stop
        </button>)
         : (
         <button
          className='border rounded-lg px-2 py-1 bg-green-300 mt-6' 
          onClick={()=>{setRunning(true)}}>
            Start</button>)
}
       <button 
      className='border rounded-lg px-2 py-1 mt-6 bg-blue-300'
       onClick={()=>{setTime(0)}}>
        Reset</button>
     </div>
    </div>
  )
}

export default App
