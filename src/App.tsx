import { useState, useRef, useContext } from 'react'
import { Timer, Keyboard, QuoteList, LayoutDropdown, ThemeSelector } from './components'
import { KeyboardContext } from './context'
import { useKeyboard } from './hooks'
import './App.css'

function App() {
  const [ langIndex, setLangIndex ] = useState<number>(0)
  const [ theme, setTheme ] = useState<string>('light')
  const ref = useRef<HTMLDivElement>(null)
  const { letter, word, endOfWord, index } = useKeyboard({ref})
  
  const handleLayout = (index:number) => { setLangIndex(index) }
  const handleTheme = (theme:string) => { setTheme(theme) }

  return (
    <div theme-attr={theme} className="App" tabIndex={0} ref={ref}>
      <header>
        <LayoutDropdown handler={handleLayout}/>
        <ThemeSelector theme-attr={theme} handler={handleTheme}/>
      </header>
      <KeyboardContext.Provider value={{word, letter, endOfWord, index}}>
        <QuoteList />
        <Keyboard current={letter} lang={langIndex}/>
      </KeyboardContext.Provider>
    </div>
  )
}

export default App
