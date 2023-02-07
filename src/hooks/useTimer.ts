import { useState } from 'react'

const useTimer = (milliSeconds: number = 1000) => {
  const [ time, setTime ] = useState<number>(0)
  const [ interv, setInterv ] = useState<NodeJS.Timer | null>(null)

  const startTimer = ():void => {
    if (interv) return
    const interval = setInterval(() => setTime(prev => prev + 1), milliSeconds)
    setInterv(interval)
  }

  const stopTimer = ():void => {
    if (!interv) return
    clearInterval(interv)
    setInterv(null)
  }
  
  const resetTimer = ():void => {
    stopTimer()
    setTime(0)
  }

  return { time, startTimer, stopTimer, resetTimer }
}

export default useTimer