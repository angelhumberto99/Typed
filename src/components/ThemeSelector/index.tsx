import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/Bs'
import { useState, useEffect } from 'react'
import { IProps } from './types'
import styles from './styles.module.scss'

const ThemeSelector = ({setTheme}: IProps) => {
  const [toggle, setToggle] = useState<boolean>(false)
  
  useEffect(() => {
    setTheme(toggle ? "dark": "light")
  }, [toggle])
  
  return (
    <button className={styles.selector} onClick={() => setToggle(prev => !prev)}>
      <div className={`${styles.rotator} ${toggle && styles.active}`}>
        <BsMoonStarsFill size={20}/>
        <BsFillSunFill size={25}/>
      </div>
    </button>
  )
}

export default ThemeSelector