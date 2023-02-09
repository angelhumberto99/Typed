export interface IKey {
  main: string
  alter: string
}

export interface IRow {
  numeric: Array<IKey>
  top: Array<IKey>
  home: Array<IKey>
  bottom: Array<IKey>
  fn: Array<IKey>
}

export interface ILayout {
  lang: string
  layout: IRow
}

export type ArrayLayout = Array<ILayout>