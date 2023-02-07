import { createContext } from 'react'

interface ITimer {
  time: number
  startTimer: () => void
  stopTimer: () => void
  resetTimer: () => void
}

const initialState = {
  time: 0,
  startTimer: () => {},
  stopTimer: () => {},
  resetTimer: () => {}
}

const TimerContext = createContext<ITimer>(initialState)

export default TimerContext