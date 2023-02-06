import { createContext } from "react"

interface IContext {
  letter: string
  word: string
  endOfWord: boolean
  index: number
}

const InitialState = {
  letter: "",
  word: "",
  endOfWord: false,
  index: 0
}

const KeyboardContext = createContext<IContext>(InitialState)

export default KeyboardContext