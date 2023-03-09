import { useState, useEffect } from 'react'
import { getPlotterOptions } from '../utils'

interface IProps {
  theme: string
  timeBoundary: number
}

const usePlotter = ({theme, timeBoundary}: IProps) => {
  const [ options, setOptions ] = useState<Object>({})
  // provitional data
  const data = {
    labels: [...(Array(timeBoundary+1).keys())].filter(el => el%2 === 0),
    datasets: [{
      label: "Correct",
      data: [{x:15, y: 15},{x:5, y: 2}],
      backgroundColor: "rgb(110, 182, 221)",
      borderColor: "rgb(49, 183, 255)",
      borderWidth: 1
    },
    {
      label: "Wrong",
      data: [{x:2, y: 20},{x:4, y: 10}],
      backgroundColor: "rgb(245, 99, 99)",
      borderColor: "red",
      borderWidth: 1
    }
    ]
  }

  const darkTheme = {
    baseColor: "rgba(204, 204, 204, 0.1)",
    darkColor: "#ccc"
  }

  const lightTheme = {
    baseColor: "rgba(0, 0, 0, 0.1)",
    darkColor: "#202020"
  }

  useEffect(() => {
    let color = theme === "light" ? lightTheme: darkTheme
    let config = getPlotterOptions(color)
    setOptions(config)
  }, [theme])
  return { options, data }
}

export default usePlotter