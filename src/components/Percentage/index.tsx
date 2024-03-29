import styles from './styles.module.scss'

interface IProps {
  percent: number
  children: string
  label: boolean
}

const Percentage = ({percent, children, label}: IProps) => {
  const dashLenght = 283
  const offset = dashLenght - (dashLenght * percent) / 100
  const percentage = {"--progress": offset } as React.CSSProperties
  
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        { label ? `${percent.toFixed(2)} %`
          : `${percent} ${children}`
        }
      </div>
      <div className={styles.circle}>
        <svg className={styles.progress} style={percentage}>
          <circle cx="50" cy="50" r="45"></circle>
        </svg>
        <span>
          { Math.trunc(percent) }
          { label && <small>%</small> }
        </span>
      </div>
      <span>
        {children}
      </span>
    </div>
  )
}

export default Percentage