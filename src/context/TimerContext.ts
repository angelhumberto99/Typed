import { createContext } from 'react'

interface ITimer {
  time: number
  interv: NodeJS.Timer | null
  startTimer: () => void
  stopTimer: () => void
  resetTimer: () => void
  ended: boolean
}

const initialState = {
  time: 0,
  interv: null,
  startTimer: () => {},
  stopTimer: () => {},
  resetTimer: () => {},
  ended: false
}

const TimerContext = createContext<ITimer>(initialState)

export default TimerContext