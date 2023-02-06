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
  lang: string
  layout: IRow
}

export type ArrayLayout = Array<ILayout>