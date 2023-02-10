import { createContext } from "react"

interface ISettings {
  langIndex: number
  setLangIndex: React.Dispatch<React.SetStateAction<number>> | null
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>> | null
  audio: boolean
  setAudio: React.Dispatch<React.SetStateAction<boolean>> | null
}

const initialState = {
  langIndex: 0,
  setLangIndex: null,
  theme: 'light',
  setTheme: null,
  audio: true,
  setAudio: null
}

const SettingsContext = createContext<ISettings>(initialState)

export default SettingsContext