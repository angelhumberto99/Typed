import { useState, useEffect } from 'react'

interface IProps {
  active: boolean
  current: string
  typed: string
}

const useWord = ({active, current, typed }: IProps) => {
  const [ ended, setEnded ] = useState<string|null>(null)
  const LAST_CHAR_INDEX = typed.length - 1
  const LAST_CHAR = typed[LAST_CHAR_INDEX]

  useEffect(() => {
    if (LAST_CHAR === " " && active) {
      const style = current === typed.substring(0, LAST_CHAR_INDEX) 
        ? 'success'
        : 'wrong'
      setEnded(style)
    }
  }, [typed, current])
  
  const checkCorrectWords = (): string|boolean => {
    if (!active) return false
    if (LAST_CHAR === " ") return false
    const isFinished = typed.length >= current.length
    const equals = current === typed
    return isFinished && (equals ? 'pass-word': 'wrong-word')
  }

  const getColor = (index: number): string|undefined => {
    if (!active || index > LAST_CHAR_INDEX) return
    const condition = current[index] === typed[index] 
    return condition ? 'success' : 'wrong'
  }

  return { checkCorrectWords, getColor, ended }
}

export default useWord