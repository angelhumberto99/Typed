import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface IProps {
  currentWord: string
  word: string
  endOfWord: boolean
  interv: NodeJS.Timer | null
  time: number
  ended: boolean
}

interface IPlot {
  x: number
  y: number
}

const useWordAnalytics = ({currentWord, word, endOfWord, interv, time, ended}: IProps) => {
  const [ wrong, setWrong ] = useState(0)
  const [ correct, setCorrect ] = useState(0)
  const [ wpm, setWpm ] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const [ wrongData, setWrongData ] = useState<Array<IPlot>>([])
  const [ correctData, setCorrectData ] = useState<Array<IPlot>>([])

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
    setWrongData([])
    setCorrectData([])
  }

  useEffect(() => {
    if (interv !== null)
      handlePrecision()
    else
      resetValues()
  }, [endOfWord, interv])

  useEffect(() => {
    setWrongData((prev) => [...prev, {x: time, y: wpm}])
  }, [wrong])

  useEffect(() => {
    setCorrectData((prev) => [...prev, {x: time, y: wpm}])
  }, [correct])

  useEffect(() => {
    let calc:number = 0
    if (time !== 0)
      calc = Math.trunc((60/time)*(correct-wrong))
    setWpm(calc < 0 ? 0 : calc)
  }, [wrong, correct, time])

  useEffect(() => {
    if (ended && location.pathname === "/") {
      navigate("rating", { state: {wpm, correct, wrong, wrongData, correctData}})
    }
  }, [ended])

  return { wrong, correct, wpm }
}

export default useWordAnalytics