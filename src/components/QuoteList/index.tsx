import { useContext } from 'react'
import { KeyboardContext } from '../../context'
import { useCurrentWord } from '../../hooks'
import Word from '../Word'
import Timer from '../Timer'
import styles from './styles.module.scss'

const QuoteList = () => {
  const { letter, word, index } = useContext(KeyboardContext)
  const { currentWord, quotes } = useCurrentWord({index})
 
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        {
          quotes.map((w:string, i:number) => {
            return (
              <Word key={i} active={index===i} current={currentWord} typed={word}>
                {w}
              </Word>
            )
          })
        }
      </p>
      <Timer/>
    </div>
  )
}

export default QuoteList