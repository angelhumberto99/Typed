import { useRef, useContext } from 'react'
import { Keyboard, QuoteList, Analytics, Restart, Header } from '../../components'
import { KeyboardContext, TimerContext, WordContext, SettingsContext, FocusContext } from '../../context'
import { useCurrentWord, useKeyboard, useTimer } from '../../hooks'
import styles from '../styles.module.scss'

const Home = () => {  
  const { audio, langIndex } = useContext(SettingsContext)
  const ref = useRef<HTMLDivElement>(null)
  const { time, interv, startTimer, stopTimer, resetTimer, ended } = useTimer()
  const { letter, word, endOfWord, index } = useKeyboard({ref, audio, interv, startTimer})
  const { currentWord, quotes } = useCurrentWord({index})
  const currentKey = currentWord[word.length] ?? ' '
  
  return (
    <div className={styles.container} tabIndex={0} ref={ref}>
      <FocusContext.Provider value={{focus: ref}}>
        <Header main={true}/>
        <TimerContext.Provider value={{time, interv, startTimer, stopTimer, resetTimer, ended}}>
          <KeyboardContext.Provider value={{word, letter, endOfWord, index}}>
            <WordContext.Provider value={{currentWord, quotes}}>
              <QuoteList start={interv}/>
              <Analytics/>
              <Restart/>
              <Keyboard current={currentKey} lang={langIndex}/>
            </WordContext.Provider>
          </KeyboardContext.Provider>
        </TimerContext.Provider>
      </FocusContext.Provider>
    </div>
  )
}

export default Home