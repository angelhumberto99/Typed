import { useContext } from 'react'
import { SettingsContext, FocusContext } from '../../context'
import { BsFillSunFill } from 'react-icons/Bs'
import styles from './styles.module.scss'

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(SettingsContext)
  const { focus } = useContext(FocusContext)

  const handleClick = () => {
    if (setTheme === null) return
    focus?.current?.focus()
    const THEME = theme === "light" ? 'dark': 'light'
    localStorage.setItem(import.meta.env.VITE_THEME, THEME)
    setTheme(THEME)
  }
  
  return (
    <button tabIndex={-1} className={styles.selector} onClick={handleClick}>
      <div className={`${styles.overlap} ${theme === "light" && styles.active}`}>
        <div className={styles.sun}>
          <BsFillSunFill size={25}/>
        </div>
      </div>
    </button>
  )
}

export default ThemeSelector