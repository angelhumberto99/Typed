import { useContext } from 'react'
import { useWordAnalytics } from '../../hooks'
import { TimerContext, KeyboardContext, WordContext } from '../../context'
import styles from './styles.module.scss'

const Analytics = () => {
  const { time, interv } = useContext(TimerContext)
  const { word, endOfWord } = useContext(KeyboardContext)
  const { currentWord } = useContext(WordContext)
  const { wrong, correct, wpm } = useWordAnalytics({currentWord, word, endOfWord, interv, time})

  return (
    <div className={styles.board}>
      <p>{correct} <small>correct</small></p>
      <p>{wrong} <small>wrong</small></p>
      <p>{60 - time} <small>seg</small></p>
      <p>{wpm} <small>wpm</small></p>
    </div>
  )
}

export default Analytics