import { IKey } from '../Keyboard/types'
import { IProps } from './types'
import { getKeySize } from '@/utils'
import styles from './styles.module.scss'

const Key = ({ children, active }: IProps) => {
  const ISO: boolean = children.main.includes('isoretdown')
  const { main, alter }: IKey = children
  const LATCH: string = `${main === "f" || main === "j"}`
  const FN_KEYS: boolean = main.length !== 1

  return ( 
      <li className={`${styles.key} ${styles[getKeySize(children.main)]} ${ISO && styles.iso} ${active && styles.active} ${FN_KEYS && styles.fn}`}>
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