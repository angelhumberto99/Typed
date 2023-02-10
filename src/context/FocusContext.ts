import { createContext } from "react"

interface IFocus {
  focus: React.RefObject<HTMLDivElement> | null
}

const initialState = {
  focus: null
}

const FocusContext = createContext<IFocus>(initialState)

export default FocusContext