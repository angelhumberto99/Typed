import { IKey } from '../components/LayoutDropdown/types'

const getActiveKey = (key: IKey, current: string): boolean => {
  return key.main === current.toLowerCase() || key?.alter === current 
    ? true 
    : current.includes('iso') && key.main.includes('iso')
}

export default getActiveKey