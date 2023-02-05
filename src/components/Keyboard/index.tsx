import { getActiveKey } from '@/utils'
import { IProps } from './types'
import Key from '../Key'
import styles from './styles.module.scss'
import Layouts from '../LayoutDropdown/layouts.json'
import { IKey, IRow, ILayout } from '../LayoutDropdown/types'

const KEYS: ILayout = Layouts as ILayout

const Keyboard = ({ current, lang }: IProps) => {
  return (
    <div className={styles.frame}>
      <div className={styles['inset-frame']}>
        {
          Object.keys(KEYS[lang as keyof ILayout]).map((row: string) => {
            return <ul className={styles.row} key={row}>
            {
              KEYS[lang as keyof ILayout][row as keyof IRow].map((key:IKey, index:number) => {
                return <Key key={index}
                active={getActiveKey(key, current)}
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