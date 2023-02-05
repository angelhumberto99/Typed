import { IWord } from "../types"

const getListOfWords = (quote: string): Array<IWord> => {
  return quote.split(/(\s+)/).map((word: string) => {
    return { word, finished: false }
  })
}


export default getListOfWords