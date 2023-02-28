import React from 'react'
import Gutter from '../Gutter'
import styles from './styles.module.scss'

interface IProps {
  typed: string
  word: string
}

const OverflowedWord = ({typed, word}:IProps) => {
  const overflow = typed.substring(word.length).split('')
  return (
    <>
      {
        overflow.map((err: string, iErr: number) => {
          return (
            <React.Fragment key={`${err}${iErr}`}>
            <span className={styles.wrong}>{err}</span>
            { overflow.length - 1 === iErr && <Gutter/> }
            </React.Fragment>
          )
        })
      }
    </>
  )
}

export default OverflowedWord