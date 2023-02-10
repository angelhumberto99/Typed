import LayoutDropdown from '../LayoutDropdown'
import Volumen from '../Volumen'
import ThemeSelector from '../ThemeSelector'
import { BsKeyboardFill } from 'react-icons/Bs'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.logo}>
          <BsKeyboardFill/> Typed
        </h1>
        <div className={styles.settings}>
          <LayoutDropdown/>
          <Volumen/>
          <ThemeSelector/>
        </div>
      </div>
    </header>
  )
}

export default Header