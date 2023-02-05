import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/Bs'
import { useState, useEffect } from 'react'
import styles from './styles.module.scss'

export interface IProps {
  handler: (theme:string) => void
}

const ThemeSelector = ({handler}: IProps) => {
  const [toggle, setToggle] = useState<boolean>(false)
  
  useEffect(() => {
    handler(toggle ? "dark": "light")
  }, [toggle])
  
  return (
    <button className={styles.selector} onClick={() => {setToggle(prev => !prev)}}>
      <div className={`${styles.overlap} ${!toggle && styles.active}`}>
        <div className={styles.sun}>
          <BsFillSunFill size={25}/>
        </div>
      </div>
    </button>
  )
}

export default ThemeSelector