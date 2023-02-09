import { createContext } from 'react'

interface IWord {
  currentWord: string
  quotes: Array<string>
}

const initialState = {
  currentWord: '',
  quotes: []
}

const WordContext = createContext<IWord>(initialState)

export default WordContext