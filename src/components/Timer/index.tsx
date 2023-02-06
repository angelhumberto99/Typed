import { useState } from 'react'
import styles from './styles.module.scss'

const Timer = () => {
  const [ time, setTime ] = useState<number>(0)
  const [ interv, setInterv ] = useState<NodeJS.Timer | null>(null)

  const startTimer = () => {
    if (interv) return
    const interval = setInterval(() => setTime(prev => prev + 1), 1000)
    setInterv(interval)
  }

  const stopTimer = () => {
    if (!interv) return
    clearInterval(interv)
    setInterv(null)
    setTime(0)
  }

  return (
    <div className={styles.container}>
      <progress className={styles.progress} max="100" value={time%100}/>
      {/* <p>time: {time}</p>
      <button onClick={startTimer}>empezar</button>
      <button onClick={stopTimer}>parar</button> */}
    </div>
  )
}

export default Timer