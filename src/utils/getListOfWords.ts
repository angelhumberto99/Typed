const getListOfWords = (quote: string): Array<string> => {
  return quote.split(/(\s+)/)
}

export default getListOfWords