import { IWord } from '../../types'
import { useCurrentWord, useKeyboard } from '../../hooks'
import Word from '../Word'
import styles from './styles.module.scss'

interface Props {
  endOfWord: boolean
  letter: string
  handleEnd: () => void
}

const QuoteList = ({endOfWord, letter, handleEnd}: Props) => {
  const { typedWord, correctWord, currentIndexWord } = useKeyboard({endOfWord, letter, handleEnd})
  const { currentWord, quotes } = useCurrentWord({currentIndexWord})
 
  return (
    <>
      <p style={{color: 'white'}}>type: {typedWord}</p>
      <p style={{color: 'white'}}>current: {currentWord.word}</p>
      <div className={styles.container}>
        <p>
          {
            quotes.map((word:IWord, index:number) => {
              return (
                <Word key={index} current={currentWord.word} finished={word.finished} typed={letter}>
                  {word.word}
                </Word>
              )
            })
          }
        </p>
      </div>
    </>
  )
}

export default QuoteList