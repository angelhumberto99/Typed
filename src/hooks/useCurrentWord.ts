import { useEffect, useState } from 'react'
import { getListOfWords } from '../utils'

interface IProps {
  index: number
}

const quote:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo officiis id odit, et vitae harum fuga exercitationem quisquam, iste voluptate minima! Dolor architecto magnam non dignissimos repellat ab quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo officiis id odit, et vitae harum fuga exercitationem quisquam, iste voluptate minima! Dolor architecto magnam non dignissimos repellat ab quo?"

const useCurrentWord = ({index}: IProps) => {
  const [ quotes, setQuotes] = useState<Array<string>>(getListOfWords(quote))
  const [ currentWord, setCurrentWord ] = useState<string>(quotes[0])

  useEffect(() => {
    setCurrentWord(quotes[index])
    // setQuotes(prev => prev.map((q:IWord, i:number) => {
    //   if (q.finished) return { word: q.word, finished: false }
    //   if (i === currentIndexWord - 2) return { word: q.word, finished: true }
    //   return q
    // }))
  }, [index])

  return { currentWord, quotes }
}

export default useCurrentWord