import { useState, useEffect } from "react"
import { playAudio } from "../utils"
import song from '../assets/soft-hit.wav'

interface IProps {
  ref: React.RefObject<HTMLDivElement> | null
  audio: boolean
  startTimer: () => void
  time: number
}

const useKeyboard = ({ref, audio, time, startTimer }: IProps) => {
  const [ letter, setLetter ] = useState<string>('')
  const [ word, setWord ] = useState<string>("")
  const [ endOfWord, setEndOfWord ] = useState<boolean>(false)
  const [ index, setIndex ] = useState<number>(0)
  const [ firstPress, setFirstPress ] = useState<boolean>(false)

  // Adds an event listener to a div element in order to handle the keyboard input
  useEffect(() => {
    ref?.current?.addEventListener("keydown", ({key}) => setLetter(key))
    return () => ref?.current?.removeEventListener("keydown", () => setLetter(''))
  }, [ref])

  // Handles keyboard input
  useEffect(() => {
    if (letter.length === 1) {
      setWord(prev => prev + letter)
      audio && playAudio(song)
    } else if (letter === "Backspace") {
      setWord(prev => prev.replace(/.$/, ''))
      audio && playAudio(song)
    }
    
    if (!firstPress && letter !== '') {
      setFirstPress(true)
      startTimer()
    }
  }, [letter])

  // checks if timer has been restarted
  useEffect(() => {
    if (time === 0) {
      setFirstPress(false)
      setLetter('')
      setWord('')
      setIndex(0)
      setEndOfWord(false)
    }
  }, [time])

  // Resets keyboard input and current word
  useEffect(() => {
    if (letter.length > 0)
      setLetter('')
    if (letter === " " || letter === "Enter")
      setEndOfWord(true)
  }, [word])

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