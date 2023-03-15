import { useState } from 'react'
import { SettingsContext } from './context'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home, Rating } from './pages'
import './App.css'

function App() {
  const [ langIndex, setLangIndex ] = useState<number>(0)
  const [ theme, setTheme ] = useState<string>('light')
  const [ audio, setAudio ] = useState<boolean>(true)
  
  return (
    <div theme-attr={theme} className="App">
      <SettingsContext.Provider value={{audio, setAudio, langIndex, setLangIndex, theme, setTheme}}>
        <BrowserRouter basename='/Typed/'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="rating" element={<Rating/>}/>
          </Routes>
        </BrowserRouter>
      </SettingsContext.Provider>
    </div>
  )
}



export default App
