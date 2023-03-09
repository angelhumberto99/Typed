interface IParams {
  baseColor: string
  darkColor: string
}

const getPlotterOptions = ({baseColor, darkColor}: IParams) => {
  return {
    plugins: {
      legend: {
        labels: {
          color: darkColor,
          font: { 
            size: 16,
            weight: "600",
            
          }
        }
      }
    },
    scales: {
      x: {
        border: { color: darkColor },
        grid: { color: baseColor , tickColor: darkColor  },
        ticks: { color : darkColor},
        title: {
          text: 'time',
          color: darkColor,
          display: true,
          font: { size: 16, style: "italic" }
        }
      },
      y: {
        border: { color: darkColor },
        grid: { color: baseColor , tickColor: darkColor  },
        ticks: { color : darkColor},
        title: {
          text: 'wpm',
          color: darkColor,
          display: true,
          font: { size: 16, style: "italic" }
        }
      }
    }
  }
}

export default getPlotterOptions