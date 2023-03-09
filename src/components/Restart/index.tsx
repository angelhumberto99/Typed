import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FocusContext, TimerContext } from '../../context'
import { MdRestartAlt, MdArrowForwardIos } from 'react-icons/md'
import styles from './styles.module.scss'

interface IProps {
  nav: boolean
}

const Restart = ({nav}: IProps) => {
  const { resetTimer } = useContext(TimerContext)
  const { focus } = useContext(FocusContext)
  const navigate = useNavigate()

  const handleClick = () => {
    if (nav) {
      navigate('/')
    } else {
      focus?.current?.focus()
      resetTimer()
    }
  }

  return (
    <button tabIndex={0} onClick={handleClick} className={styles.restart}>
      <div className={styles.logo}>
        { nav ? <MdArrowForwardIos size={25}/>: <MdRestartAlt size={25}/> }
      </div>
    </button>
  )
}

export default Restart