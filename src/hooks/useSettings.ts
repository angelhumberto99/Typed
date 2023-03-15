import { useState } from 'react'

const useSettings = () => {
  const { VITE_THEME, VITE_AUDIO, VITE_LAYOUT } = import.meta.env
  const THEME = localStorage.getItem(VITE_THEME) ?? "light"
  const LANG = localStorage.getItem(VITE_LAYOUT) ?? "0"
  const AUDIO = localStorage.getItem(VITE_AUDIO) ?? "true"

  const [ langIndex, setLangIndex ] = useState<number>(Number(LANG))
  const [ theme, setTheme ] = useState<string>(THEME)
  const [ audio, setAudio ] = useState<boolean>(AUDIO === "true")

  return { langIndex, setLangIndex, theme, setTheme, audio, setAudio}
}

export default useSettings