import { useContext } from 'react'
import { TimerContext } from '../../context'
import styles from './styles.module.scss'

const TimeLine = () => {
  const { time } = useContext(TimerContext)

  return (
    <div className={styles.container}>
      <progress className={styles.progress} max="60" value={time%60}/>
    </div>
  )
}

export default TimeLine