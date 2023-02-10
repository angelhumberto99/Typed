import { createContext } from 'react'

interface ITimer {
  time: number
  interv: NodeJS.Timer | null
  startTimer: () => void
  stopTimer: () => void
  resetTimer: () => void
}

const initialState = {
  time: 0,
  interv: null,
  startTimer: () => {},
  stopTimer: () => {},
  resetTimer: () => {}
}

const TimerContext = createContext<ITimer>(initialState)

export default TimerContext