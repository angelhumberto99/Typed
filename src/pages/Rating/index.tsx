import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect} from 'react'
import { usePlotter } from '../../hooks'
import { SettingsContext } from '../../context'
import { calcPresition } from '../../utils'
import { Header, Percentage, Restart } from '../../components'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import GlobalStyles from '../styles.module.scss'
import styles from './styles.module.scss'

const Rating = () => {
  const { state } = useLocation()
  const { theme } = useContext(SettingsContext)
  const { options, data } = usePlotter({theme, timeBoundary: 60})
  const percent = state ? calcPresition(state): 0
  const navigate = useNavigate()
  
  useEffect(() => {
    if (state === null) navigate('/')
  }, [])

  return (
    <div className={GlobalStyles.container}>
      <Header main={false}/>
      <div className={styles['main-content']}>
        { data && <Line data={data} options={options}/> }
      </div>
      {
        state &&
        <ul className={styles.info}>
          <li>
            <Percentage animation={true} percent={percent}>
              Acuracy
            </Percentage>
          </li>
          <li>
            <Percentage animation={false} percent={state.wpm}>
              WPM
            </Percentage>
          </li>
          <li>
            <Percentage animation={false} percent={state.correct}>
              Correct
            </Percentage>
          </li>
          <li>
            <Percentage animation={false} percent={state.wrong}>
              Incorrect
            </Percentage>
          </li>
        </ul>
      }
      <Restart nav={true}/>
    </div>
  )
}

export default Rating