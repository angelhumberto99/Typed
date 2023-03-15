import { SettingsContext } from './context'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home, Rating } from './pages'
import { useSettings } from './hooks'
import './App.css'

function App() {
  const { 
    langIndex, setLangIndex, 
    theme, setTheme, 
    audio, setAudio 
  } = useSettings()

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
