import { getActiveKey } from '../../utils'
import { ArrayLayout, IKey, IRow } from '../../types'
import Key from '../Key'
import styles from './styles.module.scss'
import Layouts from '../../layouts.json'

const KEYS: ArrayLayout = Layouts as ArrayLayout

interface IProps {
  current: string
  lang: number
}

const Keyboard = ({ current, lang }: IProps) => {
  const { layout, side } = KEYS[lang]
  return (
    <div className={styles.frame}>
      <div className={styles['inset-frame']}>
        {
          Object.keys(layout).map((row: string) => {
            return <ul className={styles.row} key={row}>
            {
              layout[row as keyof IRow].map((key:IKey, index:number) => {
                return <Key key={index}
                  active={getActiveKey(key, current, side)}
                >{key}</Key>
              })
            }
            </ul> 
          })
        }
      </div>
    </div>
  )
}

export default Keyboard