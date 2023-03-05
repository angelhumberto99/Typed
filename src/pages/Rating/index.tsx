import { useLocation } from 'react-router-dom'
import { Header } from '../../components'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import styles from '../styles.module.scss'

const Rating = () => {
  const {state} = useLocation()
  // provitional data
  const data = {
    labels: [...(Array(61).keys())].filter(e => e%2 === 0),
    datasets: [{
      label: "correct",
      data: [{x:15, y: 15},{x:5, y: 2}],
      backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 1
    },
    {
      label: "Wrong",
      data: [{x:2, y: 20},{x:4, y: 10}],
      backgroundColor: "red",
      borderColor: "red",
      borderWidth: 1
    }
    ]
  }

  const calcPresition = ({correct, wrong}:{correct: number, wrong: number}) => {
    return ((100/(correct + wrong)) * correct).toFixed(2)
  }

  return (
    <div className={styles.container}>
      <Header main={false}/>
      { data && <Chart type={"line"} data={data}/> }
      <p>
        WPM: {state.wpm}
        <br/>
        Correct: {state.correct}
        <br/>
        Wrong: {state.wrong}
        <br/>
        Accuracy: {calcPresition(state)} %
      </p>
    </div>
  )
}

export default Rating