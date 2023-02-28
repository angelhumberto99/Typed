import { useState, useRef } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Header } from './components'
import { Home, Rating } from './pages'
import { KeyboardContext, TimerContext, SettingsContext, FocusContext } from './context'
import { useKeyboard, useTimer } from './hooks'
import './App.css'

function App() {
  const [ langIndex, setLangIndex ] = useState<number>(0)
  const [ theme, setTheme ] = useState<string>('light')
  const [ audio, setAudio ] = useState<boolean>(true)
  const ref = useRef<HTMLDivElement>(null)
  const { time, interv, startTimer, stopTimer, resetTimer } = useTimer()
  const { letter, word, endOfWord, index } = useKeyboard({ref, audio, interv, startTimer})

  return (
    <div theme-attr={theme} className="App" tabIndex={0} ref={ref}>
      <SettingsContext.Provider value={{audio, setAudio, langIndex, setLangIndex, theme, setTheme}}>
        <FocusContext.Provider value={{focus: ref}}>
          <TimerContext.Provider value={{time, interv, startTimer, stopTimer, resetTimer}}>
            <KeyboardContext.Provider value={{word, letter, endOfWord, index}}>
              <BrowserRouter>
                <Header/>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="rating" element={<Rating/>}/>
                </Routes>
              </BrowserRouter>
            </KeyboardContext.Provider>
          </TimerContext.Provider>
        </FocusContext.Provider>
      </SettingsContext.Provider>
    </div>
  )
}



export default App
