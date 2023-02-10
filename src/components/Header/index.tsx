import LayoutDropdown from '../LayoutDropdown'
import Volumen from '../Volumen'
import ThemeSelector from '../ThemeSelector'

const Header = () => {
  return (
    <header>
      <LayoutDropdown/>
      <Volumen/>
      <ThemeSelector/>
    </header>
  )
}

export default Header