import { ILayout } from './types'
import { IProps } from './types'
import Layouts from './layouts.json'

const layouts: ILayout = Layouts as ILayout

const LayoutDropdown = ({setLayout}: IProps) => {
  return (
    <select onChange={({target}) => setLayout(target.value)}>
      {
        Object.keys(layouts).map((key: string, index: number) => {
          return <option key={index}>{key}</option>
        })
      }
    </select>
  )
}

export default LayoutDropdown