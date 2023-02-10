import { useState, useRef } from 'react'
import { Keyboard, QuoteList, Analytics, Header, Restart } from './components'
import { KeyboardContext, TimerContext, WordContext, SettingsContext, FocusContext } from './context'
import { useKeyboard, useTimer, useCurrentWord } from './hooks'
import './App.css'

function App() {
  const [ langIndex, setLangIndex ] = useState<number>(0)
  const [ theme, setTheme ] = useState<string>('light')
  const [ audio, setAudio ] = useState<boolean>(true)
  const ref = useRef<HTMLDivElement>(null)
  const { time, interv, startTimer, stopTimer, resetTimer } = useTimer()
  const { letter, word, endOfWord, index } = useKeyboard({ref, audio, interv, startTimer})
  const { currentWord, quotes } = useCurrentWord({index})
  const currentKey = currentWord[word.length] ?? ' '

  return (
    <div theme-attr={theme} className="App" tabIndex={0} ref={ref}>
      <SettingsContext.Provider value={{audio, setAudio, langIndex, setLangIndex, theme, setTheme}}>
        <FocusContext.Provider value={{focus: ref}}>
          <Header/>
          <TimerContext.Provider value={{time, interv, startTimer, stopTimer, resetTimer}}>
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
      </SettingsContext.Provider>
    </div>
  )
}

export default App
