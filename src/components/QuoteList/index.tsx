import { useContext } from 'react'
import { KeyboardContext, WordContext } from '../../context'
import Word from '../Word'
import TimeLine from '../TimeLine'
import styles from './styles.module.scss'

const QuoteList = () => {
  const { word, index } = useContext(KeyboardContext)
  const { currentWord, quotes } = useContext(WordContext)
 
  return (
    <div className={styles.container}>
      <p className={styles.paragraph} >
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
      <TimeLine/>
    </div>
  )
}

export default QuoteList