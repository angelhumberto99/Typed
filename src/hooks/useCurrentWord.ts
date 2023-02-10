import { useEffect, useState } from 'react'
import { getListOfWords } from '../utils'

interface IProps {
  index: number
}

const quote:string = "lorem ipsum dolor sit amet"

const useCurrentWord = ({index}: IProps) => {
  const [ quotes, setQuotes] = useState<Array<string>>(getListOfWords(quote))
  const [ currentWord, setCurrentWord ] = useState<string>(quotes[0])

  useEffect(() => {
    if (index >= quotes.length - 1){
      // TODO: get new quotes from API
      setQuotes(prev => [...prev, ' ', ...prev])
    } else
      setCurrentWord(quotes[index])
  }, [index])

  useEffect(() => {
    setCurrentWord(quotes[index])
  }, [quotes])

  return { currentWord, quotes }
}

export default useCurrentWord