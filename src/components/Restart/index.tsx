import { useContext } from 'react'
import { FocusContext, TimerContext } from '../../context'
import { MdRestartAlt } from 'react-icons/md'
import styles from './styles.module.scss'

const Restart = () => {
  const { resetTimer } = useContext(TimerContext)
  const { focus } = useContext(FocusContext)

  const handleClick = () => {
    focus?.current?.focus()
    resetTimer()
  }

  return (
    <button tabIndex={0} onClick={handleClick} className={styles.restart}>
      <div className={styles.logo}>
        <MdRestartAlt size={25}/>
      </div>
    </button>
  )
}

export default Restart