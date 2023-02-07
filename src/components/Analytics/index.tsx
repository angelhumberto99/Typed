import { useContext } from 'react'
import { TimerContext } from '../../context'
import styles from './styles.module.scss'

const Analytics = () => {
  const { time, startTimer, stopTimer, resetTimer } = useContext(TimerContext)

  return (
    <div className={styles.board}>
      <p>{time} <small>correct</small></p>
      <p>{time} <small>wrong</small></p>
      <p>{time} <small>seg</small></p>
      <p>{time} <small>wpm</small></p>
      {/* Testing buttons */}
      <button onClick={startTimer}>empezar</button>
      <button onClick={stopTimer}>parar</button>
      <button onClick={resetTimer}>reiniciar</button>
    </div>
  )
}

export default Analytics