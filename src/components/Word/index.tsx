import { useWord } from '../../hooks'
import styles from './styles.module.scss'

interface IProps {
  active: boolean
  current: string
  typed: string
  children: string
}

const Word = ({active, current, typed, children}: IProps) => {
  const { checkCorrectWords, getColor, ended, scroll } = useWord({ active, current, typed })
  const LAST_CHAR_INDEX = typed.length - 1
  const LAST_CHAR = typed[LAST_CHAR_INDEX]
  const overflow = active && typed.length > children.length && LAST_CHAR !== " "

  const getContainerStyles = () => {
    return `${styles.word} 
    ${styles[`${checkCorrectWords()}`]} 
    ${active && styles.selected} 
    ${overflow && styles.overflow} 
    ${styles[`${ended}`]}`
  }

  return (
    <span className={getContainerStyles()} ref={scroll}>
      {
        children.split('').map((letter:string, index:number) => {
            return (
              <>
                { active && index === typed.length && typed.length === 0 && <span className={styles.gutter}>&nbsp;</span> }
                <span className={styles[`${getColor(index)}`]} key={index}>{letter}</span>
                { active && index === LAST_CHAR_INDEX && <span className={styles.gutter}>&nbsp;</span> }
              </>
            )
        })
      }
      {
        overflow && 
        typed.substring(children.length).split('').map((err: string, iErr: number) => {
          return (
            <>
              <span className={styles.wrong} key={`${err}${iErr}`}>{err}</span>
              { (LAST_CHAR_INDEX - children.length) === iErr && <span className={styles.gutter}>&nbsp;</span> }
            </>
          )
        })
      }
      <span className={styles.particle}/>
    </span>
  )
}

export default Word