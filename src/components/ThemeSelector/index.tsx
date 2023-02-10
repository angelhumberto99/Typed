import { useContext } from 'react'
import { SettingsContext } from '../../context'
import { BsFillSunFill } from 'react-icons/Bs'
import styles from './styles.module.scss'

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(SettingsContext)

  const handleClick = () => {
    if (setTheme === null) return
    setTheme(theme === "light" ? 'dark': 'light')
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