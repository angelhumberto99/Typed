import { useState, useRef } from 'react'
import { Keyboard, QuoteList, LayoutDropdown, ThemeSelector, Analytics } from './components'
import { KeyboardContext, TimerContext } from './context'
import { useKeyboard, useTimer } from './hooks'
import './App.css'

function App() {
  const [ langIndex, setLangIndex ] = useState<number>(0)
  const [ theme, setTheme ] = useState<string>('light')
  const ref = useRef<HTMLDivElement>(null)
  const { letter, word, endOfWord, index } = useKeyboard({ref})
  const { time, startTimer, stopTimer, resetTimer } = useTimer()
  
  const handleLayout = (index:number) => { setLangIndex(index) }
  const handleTheme = (theme:string) => { setTheme(theme) }

  return (
    <div theme-attr={theme} className="App" tabIndex={0} ref={ref}>
      <header>
        <LayoutDropdown handler={handleLayout}/>
        <ThemeSelector theme-attr={theme} handler={handleTheme}/>
      </header>
      <KeyboardContext.Provider value={{word, letter, endOfWord, index}}>
        <TimerContext.Provider value={{time, startTimer, stopTimer, resetTimer}}>
          <QuoteList />
          <Analytics/>
        </TimerContext.Provider>
        <Keyboard current={letter} lang={langIndex}/>
      </KeyboardContext.Provider>
    </div>
  )
}

export default App
