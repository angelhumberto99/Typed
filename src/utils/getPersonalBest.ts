const { VITE_PB } = import.meta.env

const getPersonalBest = (wpm: number): number => {
  const personalBest = localStorage.getItem(VITE_PB)
  if (personalBest === null) {
    localStorage.setItem(VITE_PB, String(wpm))
    return wpm
  }
  
  let pb = Number(personalBest) > wpm? personalBest: String(wpm)
  localStorage.setItem(VITE_PB, pb)
  return Number(pb)
}

export default getPersonalBest