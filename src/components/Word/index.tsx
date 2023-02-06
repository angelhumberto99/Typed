import { useState, useEffect } from 'react'
import styles from './styles.module.scss'

interface IProps {
  active: boolean
  current: string
  typed: string
  children: string
}

const Word = ({active, current, typed, children}: IProps) => {
  const [ ended, setEnded ] = useState<string|null>(null)
  const LAST_CHAR_INDEX = typed.length - 1
  const LAST_CHAR = typed[LAST_CHAR_INDEX]
  const overflow = active && typed.length > children.length && LAST_CHAR !== " "

  useEffect(() => {
    if (LAST_CHAR === " " && active) {
      const style = current === typed.substring(0, LAST_CHAR_INDEX) 
        ? styles.success
        : styles.wrong
      setEnded(style)
    }
  }, [typed, current])
  
  const checkCorrectWords = (): string|boolean => {
    if (!active) return false
    if (LAST_CHAR === " ") return false
    const isFinished = typed.length >= current.length
    const equals = current === typed
    return isFinished && (equals ? styles['pass-word']: styles['wrong-word'])
  }

  const getColor = (index: number): string|undefined => {
    if (!active || index > LAST_CHAR_INDEX) return
    const condition = current[index] === typed[index] 
    return condition ? styles.success : styles.wrong
  }

  return (
    <span className={`${styles.word} ${checkCorrectWords()} ${active && styles.selected} ${overflow && styles.overflow} ${ended}`}>
      {
        children.split('').map((letter:string, index:number) => {
          return <span className={`${getColor(index)}`} key={index}>{letter}</span>
        })
      }
      {
        overflow && 
        typed.substring(children.length).split('').map((err: string, iErr: number) => {
          return <span className={styles.wrong} key={`${err}${iErr}`}>{err}</span>
        })
      }
      <span className={styles.particle}/>
    </span>
  )
}

export default Word