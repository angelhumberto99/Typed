import { IKey } from '../types'

const getActiveKey = (key: IKey, current: string): boolean => {
  // TODO: active shift when key is Upper case
  return key.main === current.toLowerCase() || key?.alter === current 
    ? true 
    : current.includes('iso') && key.main.includes('iso')
}

export default getActiveKey