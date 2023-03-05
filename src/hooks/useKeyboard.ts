import { useState, useEffect } from "react"
import { playAudio } from "../utils"
import song from '../assets/soft-hit.wav'

interface IProps {
  ref: React.RefObject<HTMLDivElement> | null
  audio: boolean
  startTimer: () => void
  interv: NodeJS.Timer | null
}

const useKeyboard = ({ ref, audio, interv, startTimer }: IProps) => {
  const [ letter, setLetter ] = useState<string>('')
  const [ word, setWord ] = useState<string>("")
  const [ endOfWord, setEndOfWord ] = useState<boolean>(false)
  const [ index, setIndex ] = useState<number>(0)
  const [ firstPress, setFirstPress ] = useState<boolean>(false)

  // Adds an event listener to a div element in order to handle the keyboard input
  useEffect(() => {
    ref?.current?.addEventListener("keydown", ({key}) => setLetter(key))
    ref?.current?.focus()
    return () => ref?.current?.removeEventListener("keydown", () => setLetter(''))
  }, [ref])

  // Handles keyboard input
  const handleKeyDown = () => {
    if (letter.length === 1)
      setWord(prev => prev + letter)
    else if (letter === "Backspace")
      setWord(prev => prev.replace(/.$/, ''))
    letter.length > 0 && audio && playAudio(song)
  }

  useEffect(() => {
    if (firstPress)
      handleKeyDown()
    else if (!firstPress && letter !== '') {
      setFirstPress(true)
      startTimer()
    }
  }, [letter])

  // checks if timer has been restarted
  const resetAll = () => {
    setFirstPress(false)
    setLetter('')
    setWord('')
    setIndex(0)
    setEndOfWord(false)
  }

  useEffect(() => {
    if (interv === null && firstPress)
      resetAll()
  }, [interv])

  // Resets keyboard input and current word
  useEffect(() => {
    if (letter.length > 0)
      setLetter('')
    if (letter === " " || letter === "Enter")
      setEndOfWord(true)
  }, [word])

  useEffect(() => {
    if (firstPress)
      setLetter('')
  }, [firstPress])

  // Checks every time you write a whole word
  useEffect(() => {
    if (endOfWord) {
      setWord('')
      setIndex(prev => prev + 2)
      setEndOfWord(false)
    }
  }, [endOfWord])

  return { letter, word, endOfWord, index }
}

export default useKeyboard