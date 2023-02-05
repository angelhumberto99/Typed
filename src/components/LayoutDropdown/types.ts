export interface IKey {
  main: string
  alter: string
}

export interface IRow {
  numeric: IKey[]
  top: IKey[]
  home: IKey[]
  bottom: IKey[]
  fn: IKey[]
}

export interface ILayout {
  "Español ISO": IRow
  "English ANSI": IRow
  "Deutch ISO": IRow
}

export interface IProps {
  setLayout: Function
}