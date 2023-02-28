import { IKey, ISide } from "../types";

const getActiveKey = (key: IKey, current: string, side:ISide): boolean => {
  if (current === current.toUpperCase()) {
    if (key.main.includes('shift')) {
      const shift = key.main.includes('lshift') ? side.right : side.left
      return findSide(current, shift)
    }
  }

  return key.main.toLowerCase() === current.toLowerCase() || key?.alter === current 
    ? true 
    : current.includes('iso') && key.main.includes('iso')
}

const findSide = (key: string, shift: string) => {
  return shift.includes(key.toUpperCase())
}

export default getActiveKey