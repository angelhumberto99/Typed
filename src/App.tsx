import { useEffect, useState } from 'react'
import Keyboard from './components/Keyboard'
import QuoteList from './components/QuoteList'
import LayoutDropdown from './components/LayoutDropdown'
import ThemeSelector from './components/ThemeSelector'
import './App.css'

function App() {
  const [ currentKey, setCurrentKey ] = useState<string>('')
  const [ langIndex, setLangIndex ] = useState<number>(0)
  const [ theme, setTheme ] = useState<string>('light')
  const [ endOfWord, setEndOfWord ] = useState<boolean>(false)

  useEffect(() => {
    if (currentKey.length > 0) setCurrentKey('')
    if (currentKey === " " || currentKey === "Enter") setEndOfWord(true)
  }, [currentKey])

  const handleLayout = (index:number) => { setLangIndex(index) }
  const handleTheme = (theme:string) => { setTheme(theme) }
  const handleEnd = () => { setEndOfWord(false) }

  return (
    <div theme-attr={theme} className="App" tabIndex={0} onKeyDown={({key}) => setCurrentKey(key)}>
      <header>
        <LayoutDropdown handler={handleLayout}/>
        <ThemeSelector theme-attr={theme} handler={handleTheme}/>
      </header>
      <QuoteList endOfWord={endOfWord} handleEnd={handleEnd} letter={currentKey}/>
      <Keyboard current={currentKey} lang={langIndex}/>
    </div>
  )
}

export default App
