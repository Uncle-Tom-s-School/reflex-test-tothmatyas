import { useEffect, useState } from "react"

const App = () => {
  const [random,setRandom] = useState(Math.floor(Math.random()*10))
  const [startTime,] = useState(0)
  const [current, setCurrent] = useState<number>(startTime)
  const [isStopped,setIsStopped] = useState(false)
  const [waitTime, setWaitTime] = useState(0)

useEffect(()=>{
    if(isStopped) return

    const intervalId = setInterval(() => {
        setCurrent(prev => (prev + 1))       
    }, 10)
    
    return () => {clearInterval(intervalId)}


  }, [isStopped])

  useEffect(()=>{
    setInterval(() => {
      setWaitTime(prev=>(prev + 1))
    }, 1000)
  },[isStopped])

  return (
    <div>
      {waitTime > random ? 
      <div id="zold">
        <p>Elért eredmény:</p>
      {current -(random*100)}ms
      <button id="stopBtn" onClick={()=>{setIsStopped(prev => !prev)}}>Ide kell kattintani</button>
      </div>
      :
      <div id="sarga">
      <h1>Reflexjáték</h1>
      <p>zöldnél kattints</p>
      {waitTime}
      </div>
    }
    </div>
  )
}

export default App