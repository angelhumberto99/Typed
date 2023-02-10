import { useContext } from 'react'
import { TimerContext } from '../../context'
import { IKey } from '../../types'
import { getKeySize } from '../../utils'
import styles from './styles.module.scss'

interface IProps {
  children: IKey
  active: boolean
}

const Key = ({ children, active }: IProps) => {
  const { interv } = useContext(TimerContext)
  const ISO: boolean = children.main.includes('isoretdown')
  const { main, alter }: IKey = children
  const LATCH: string = `${main === "f" || main === "j"}`
  const FN_KEYS: boolean = main.length !== 1
  const ACTIVE = interv !== null && active

  return ( 
      <li className={`${styles.key} ${styles[getKeySize(children.main)]} ${ISO && styles.iso} ${ACTIVE && styles.active} ${FN_KEYS && styles.fn}`}>
        {
          !FN_KEYS
          ? <div latch-attr={LATCH} className={styles.layout}>
              <span className={styles.alter}>{alter}</span>
              <span className={styles.main}>{main.toUpperCase()}</span>
            </div>
          : null
        }
      </li>
  )
}

export default Key