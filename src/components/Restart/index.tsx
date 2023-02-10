import { useContext } from 'react'
import { TimerContext } from '../../context'
import { MdRestartAlt } from 'react-icons/md'
import styles from './styles.module.scss'

const Restart = () => {
  const { resetTimer } = useContext(TimerContext)
  return (
    <button onClick={resetTimer} className={styles.restart}>
      <div className={styles.logo}>
        <MdRestartAlt size={25}/>
      </div>
    </button>
  )
}

export default Restart