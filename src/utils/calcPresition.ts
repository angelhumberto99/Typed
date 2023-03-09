interface IParams {
  correct: number
  wrong: number
}

const calcPresition = ({correct, wrong}: IParams) => {
  return (100/(correct + wrong)) * correct
}

export default calcPresition