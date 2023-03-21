import { useState, useEffect } from 'react'
import { getPlotterOptions } from '../utils'

interface IPlot {
  x: number
  y: number
}

interface IProps {
  theme: string
  timeBoundary: number
  wrongData: Array<IPlot>
  correctData: Array<IPlot>
}

const usePlotter = ({theme, timeBoundary, wrongData, correctData}: IProps) => {
  const [ options, setOptions ] = useState<Object>({})

  const data = {
    labels: [...(Array(timeBoundary+1).keys())],
    datasets: [{
      label: "Correct",
      data: correctData,
      backgroundColor: "rgb(110, 182, 221)",
      borderColor: "rgb(49, 183, 255)",
      borderWidth: 1
    },
    {
      label: "Wrong",
      data: wrongData,
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