import { useState, useRef } from 'react'
import { Keyboard, QuoteList, LayoutDropdown, ThemeSelector, Analytics, Volumen } from './components'
import { KeyboardContext, TimerContext, WordContext } from './context'
import { useKeyboard, useTimer, useCurrentWord } from './hooks'
import './App.css'

function App() {
  const [ langIndex, setLangIndex ] = useState<number>(0)
  const [ theme, setTheme ] = useState<string>('light')
  const ref = useRef<HTMLDivElement>(null)
  const { letter, word, endOfWord, index } = useKeyboard({ref})
  const { time, startTimer, stopTimer, resetTimer } = useTimer()

  const { currentWord, quotes } = useCurrentWord({index})
  
  const handleLayout = (index:number) => { setLangIndex(index) }
  const handleTheme = (theme:string) => { setTheme(theme) }

  const currentKey = currentWord[word.length] ?? ' '

  return (
    <div theme-attr={theme} className="App" tabIndex={0} ref={ref}>
      <header>
        <LayoutDropdown handler={handleLayout}/>
        <Volumen/>
        <ThemeSelector theme-attr={theme} handler={handleTheme}/>
      </header>
      <KeyboardContext.Provider value={{word, letter, endOfWord, index}}>
        <WordContext.Provider value={{currentWord, quotes}}>
          <TimerContext.Provider value={{time, startTimer, stopTimer, resetTimer}}>
            <QuoteList />
            <Analytics/>
          </TimerContext.Provider>
          <Keyboard current={currentKey} lang={langIndex}/>
        </WordContext.Provider>
      </KeyboardContext.Provider>
    </div>
  )
}

export default App
