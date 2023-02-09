const playAudio = (file: string) => {
  let sound = new Audio(file)
  sound.pause()
  sound.play()
}

export default playAudio