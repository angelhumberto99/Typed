import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
  currentWord: string
  word: string
  endOfWord: boolean
  interv: NodeJS.Timer | null
  time: number
}

const useWordAnalytics = ({currentWord, word, endOfWord, interv, time}: IProps) => {
  const [ wrong, setWrong ] = useState(0)
  const [ correct, setCorrect ] = useState(0)
  const [ wpm, setWpm ] = useState(0)
  const navigate = useNavigate()

  const handlePrecision = () => {
    if (!endOfWord) return
    if (currentWord === word.substring(0, word.length - 1))
      setCorrect(prev => prev + 1)
    else
      setWrong(prev => prev + 1)
  }
  
  const resetValues = () => {
    setWrong(0)
    setCorrect(0)
    setWpm(0)
  }

  useEffect(() => {
    if (interv !== null)
      handlePrecision()
    else
      resetValues()
  }, [endOfWord, interv])

  useEffect(() => {
    let calc:number = 0
    if (time !== 0)
      calc = Math.trunc((60/time)*(correct-wrong))
    setWpm(calc)
  }, [wrong, correct, time])

  useEffect(() => {
    // TODO: prevent this from happening when user restarts
    if (time === 0 && wpm !== 0) {
      navigate("rating", { state: {wpm, correct, wrong}})
    }
  }, [time])

  return { wrong, correct, wpm }
}

export default useWordAnalytics