import { ArrayLayout, ILayout } from '../../types'
import Layouts from '../../layouts.json'

const layouts: ArrayLayout = Layouts as ArrayLayout

export interface IProps {
  handler: (index:number) => void
}

const LayoutDropdown = ({handler}: IProps) => {
  return (
    <select onChange={({target}) => handler(target.selectedIndex)}>
      {
        layouts.map((layout: ILayout, index: number) => {
          return <option key={index}>{layout.lang}</option>
        })
      }
    </select>
  )
}

export default LayoutDropdown