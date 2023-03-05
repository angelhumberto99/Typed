import { useContext } from 'react'
import LayoutDropdown from '../LayoutDropdown'
import Volumen from '../Volumen'
import ThemeSelector from '../ThemeSelector'
import { BsKeyboardFill } from 'react-icons/Bs'
import { Link } from 'react-router-dom'
import { FocusContext } from '../../context'
import styles from './styles.module.scss'

interface IProps {
  main: boolean
}

const Header = ({main}: IProps) => {
  const { focus } = useContext(FocusContext)

  const handleClick = () => {
    focus?.current?.focus()
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link className={styles.link} to={"/"} tabIndex={!main? 1: -1} onClick={handleClick}>
          <h1 className={styles.logo}>
            <BsKeyboardFill/> Typed
          </h1>
        </Link>
        <div className={styles.settings}>
          {
            main && 
            <>
              <LayoutDropdown/>
              <Volumen/>
            </>
          }
          <ThemeSelector/>
        </div>
      </div>
    </header>
  )
}

export default Header