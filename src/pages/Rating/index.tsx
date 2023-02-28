import { useLocation } from 'react-router-dom'

const Rating = () => {
  const {state} = useLocation()

  return (
    <div>
      <p>
        WPM: {state.wpm}
      </p>
    </div>
  )
}

export default Rating