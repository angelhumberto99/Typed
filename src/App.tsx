import { useState } from 'react'
import Keyboard from './components/Keyboard'
import QuoteList from './components/QuoteList'
import LayoutDropdown from './components/LayoutDropdown'
import ThemeSelector from './components/ThemeSelector'
import './App.css'

function App() {
  const [ current, setCurrent ] = useState('iso')
  const [ lang, setLang ] = useState('Español ISO')
  const [ theme, setTheme ] = useState('light')
  return (
    <div theme-attr={theme} className="App" tabIndex={0} onKeyDown={({key}) => setCurrent(key)}>
      <header>
        <LayoutDropdown setLayout={setLang}/>
        <ThemeSelector theme-attr={theme} setTheme={setTheme}/>
      </header>
      <QuoteList/>
      <Keyboard current={current} lang={lang}/>
    </div>
  )
}

export default App
