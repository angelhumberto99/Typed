import { useContext } from 'react'
import { Keyboard, QuoteList, Analytics, Restart } from '../../components'
import { KeyboardContext, TimerContext, WordContext, SettingsContext } from '../../context'
import { useCurrentWord } from '../../hooks'

const Home = () => {
  const { interv } = useContext(TimerContext)
  const { word, index } = useContext(KeyboardContext)
  const { langIndex } = useContext(SettingsContext)
  const { currentWord, quotes } = useCurrentWord({index})
  const currentKey = currentWord[word.length] ?? ' '

  return (
    <WordContext.Provider value={{currentWord, quotes}}>
      <QuoteList start={interv}/>
      <Analytics/>
      <Restart/>
      <Keyboard current={currentKey} lang={langIndex}/>
    </WordContext.Provider>
  )
}

export default Home