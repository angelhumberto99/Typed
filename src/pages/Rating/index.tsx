import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { usePlotter } from '../../hooks'
import { SettingsContext } from '../../context'
import { calcPresition, getPersonalBest } from '../../utils'
import { Header, Percentage, Restart } from '../../components'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import GlobalStyles from '../styles.module.scss'
import styles from './styles.module.scss'

const Rating = () => {
  const { state } = useLocation()
  const { theme } = useContext(SettingsContext)
  const { wrongData, correctData } = state ?? {wrongData: [], correctData: []}
  const { options, data } = usePlotter({theme, timeBoundary: 60, wrongData, correctData})
  const percent = state ? calcPresition(state): 0
  const navigate = useNavigate()
  const [ pb, setPb ] = useState(0)
  
  useEffect(() => {
    if (state === null) navigate('/')
    setPb(getPersonalBest(state.wpm))
  }, [])

  return (
    <div className={GlobalStyles.container}>
      <Header main={false}/>
      <div className={styles['main-content']}>
        { data && <Line data={data} options={options}/> }
      </div>
      {
        state &&
        <div className={GlobalStyles.content}>
          <ul className={styles.info}>
            <li>
              <Percentage label={true} percent={percent}>
                Acuracy
              </Percentage>
            </li>
            <li>
              <Percentage label={false} percent={state.wpm}>
                WPM
              </Percentage>
            </li>
            <li>
              <Percentage label={false} percent={state.correct}>
                Correct
              </Percentage>
            </li>
            <li>
              <Percentage label={false} percent={state.wrong}>
                Incorrect
              </Percentage>
            </li>
            <li>
              <Percentage label={false} percent={pb}>
                PB
              </Percentage>
            </li>
          </ul>
          <Restart nav={true}/>
        </div>
      }
    </div>
  )
}

export default Rating