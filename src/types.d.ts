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

export interface ISide {
  left: string
  right: string
}

export interface ILayout {
  lang: string
  side: ISide
  layout: IRow
}

export type ArrayLayout = Array<ILayout>