import { useContext } from 'react'
import { SettingsContext } from '../../context'
import styles from './styles.module.scss'

const Volumen = () => {
  const { audio, setAudio } = useContext(SettingsContext)

  const handleClick = () => {
    if (setAudio === null) return
    setAudio(prev => !prev)
  }

  return (
    <button tabIndex={-1} className={`${styles.container} ${!audio && styles.active}`} onClick={handleClick}>
      <div className={styles.volumen}/>
      <div className={styles.sound}/>
    </button>
  )
}

export default Volumen