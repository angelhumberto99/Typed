import { useState, useEffect } from "react"
import song from '../assets/soft-hit.wav'
import { playAudio } from "../utils"

interface IProps {
  ref: React.RefObject<HTMLDivElement> | null
}

const useKeyboard = ({ref}: IProps) => {
  const [ letter, setLetter ] = useState<string>('')
  const [ word, setWord ] = useState<string>("")
  const [ endOfWord, setEndOfWord ] = useState<boolean>(false)
  const [ index, setIndex ] = useState<number>(0)

  // Adds an event listener to a div element in order to handle the keyboard input
  useEffect(() => {
    ref?.current?.addEventListener("keydown", ({key}) => setLetter(key))
    return () => ref?.current?.removeEventListener("keydown", () => setLetter(''))
  }, [ref])

  // Handles keyboard input
  useEffect(() => {
    if (letter.length === 1) {
      setWord(prev => prev + letter)
      playAudio(song)
    } else if (letter === "Backspace") {
      setWord(prev => prev.replace(/.$/, ''))
      playAudio(song)
    }
  }, [letter])

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