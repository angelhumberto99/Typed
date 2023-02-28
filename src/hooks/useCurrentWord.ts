import { useEffect, useState } from 'react'
import { getListOfWords } from '../utils'

interface IProps {
  index: number
}

const useCurrentWord = ({index}: IProps) => {
  const [ quotes, setQuotes] = useState<Array<string>>([""])
  const [ currentWord, setCurrentWord ] = useState<string>("")

  const getQuote = async () => {
    const res = await fetch("https://api.quotable.io/random")
    const content = await res.json()
    return getListOfWords(content?.content)
  }

  useEffect(() => {
    if (index >= quotes.length - 1 || index === 0){
      getQuote().then((res) => {
        if (index === 0) {
          setQuotes(res)
        } else {
          setQuotes(prev => [...prev, ' ', ...res])
        }
      })
    } else
      setCurrentWord(quotes[index])
  }, [index])

  useEffect(() => {
    setCurrentWord(quotes[index])
  }, [quotes])

  return { currentWord, quotes }
}

export default useCurrentWord