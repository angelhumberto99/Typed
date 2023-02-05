import { useEffect, useState } from 'react'
import { IWord } from '../types'
import { getListOfWords } from '../utils'

interface IProps {
  currentIndexWord: number
}

const quote:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo officiis id odit, et vitae harum fuga exercitationem quisquam, iste voluptate minima! Dolor architecto magnam non dignissimos repellat ab quo?"

const useCurrentWord = ({ currentIndexWord }: IProps) => {
  const [ quotes, setQuotes] = useState<Array<IWord>>(getListOfWords(quote))
  const [ currentWord, setCurrentWord ] = useState<IWord>(quotes[currentIndexWord])

  useEffect(() => {
    setCurrentWord(quotes[currentIndexWord])
    setQuotes(prev => prev.map((q:IWord, i:number) => {
      if (q.finished) return { word: q.word, finished: false }
      if (i === currentIndexWord - 2) return { word: q.word, finished: true }
      return q
    }))
  }, [currentIndexWord])

  return { currentWord, quotes }
}

export default useCurrentWord