import { useContext } from 'react'
import { KeyboardContext, WordContext } from '../../context'
import Word from '../Word'
import TimeLine from '../TimeLine'
import styles from './styles.module.scss'

interface IProps {
  start: NodeJS.Timer | null
}

const QuoteList = ({start}: IProps) => {
  const { word, index } = useContext(KeyboardContext)
  const { currentWord, quotes } = useContext(WordContext)
 
  return (
    <div className={styles.container}>
      <p className={`${styles.paragraph} ${!start && styles.start}`}>
        {
          start === null
          ? "Press any key to start":
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