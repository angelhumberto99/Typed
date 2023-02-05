import styles from './styles.module.scss'

interface IProps {
  current: string
  typed: string
  children: string
  finished: boolean
}

const Word = ({current, typed, finished, children}: IProps) => {
  
  const checkCorrectWords = (isFinished: boolean) => {
    const condition = Boolean(Math.floor(Math.random() * 2)) // TODO
    return isFinished && (condition ? styles['pass-word']: styles['wrong-word'])
  }

  return (
    <span className={`${styles.word} ${checkCorrectWords(finished)}`}>
      {
        children.split('').map((letter:string, index:number) => {
          return <span key={index}>{letter}</span>
        })
      }
      <span className={styles.particle}/>
    </span>
  )
}

export default Word