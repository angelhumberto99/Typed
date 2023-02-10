import { useContext } from 'react'
import { SettingsContext } from '../../context'
import { ArrayLayout, ILayout } from '../../types'
import Layouts from '../../layouts.json'
import styles from './styles.module.scss'

const layouts: ArrayLayout = Layouts as ArrayLayout

const LayoutDropdown = () => {
  const { setLangIndex } = useContext(SettingsContext)
  const handleClick = ({target}: React.ChangeEvent<HTMLSelectElement>) => {
    if (setLangIndex === null) return
    setLangIndex(target.selectedIndex)
  }

  return (
    <select tabIndex={-1} className={styles.select} onChange={handleClick}>
      {
        layouts.map((layout: ILayout, index: number) => {
          return <option key={index}>{layout.lang}</option>
        })
      }
    </select>
  )
}

export default LayoutDropdown