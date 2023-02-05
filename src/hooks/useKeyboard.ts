import { useState, useEffect } from "react"

interface IProps {
  letter: string
  endOfWord: boolean
  handleEnd: () => void
}

const useKeyboard = ({letter, endOfWord, handleEnd}: IProps) => {
  const [ typedWord, setTypedWord ] = useState<string>("")
  const [ currentWord, setCurrentWord ] = useState<string>("")
  const [ correctWord, setCorrectWord ] = useState<boolean>(false)
  const [ currentIndexWord, setCurrentIndexWord ] = useState<number>(0)

  useEffect(() => {
    if (letter.length === 1) {
      setTypedWord(prev => prev + letter)
    } else if (letter === "Backspace") {
      setTypedWord(prev => prev.replace(/.$/, ''))
    }
  }, [letter])

  useEffect(() => {
    if (endOfWord) {
      setCorrectWord(typedWord === currentWord)
      setTypedWord('')
      handleEnd()
      setCurrentIndexWord(prev => prev + 2)
      console.log("cambiar de palabra")
    }
  }, [endOfWord])

  return { typedWord, currentWord, correctWord, currentIndexWord }
}

export default useKeyboard