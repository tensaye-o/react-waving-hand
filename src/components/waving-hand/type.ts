import type { HTMLAttributes } from 'react'

export enum FSP {
  I = '👋🏻',
  II = '👋🏼',
  III = '👋',
  IV = '👋🏽',
  V = '👋🏾',
  VI = '👋🏿'
}
export type Phototype = keyof typeof FSP

export type NaturalNumber = number & { __naturalNumber: true }
export type NumericPhototype = 1 | 2 | 3 | 4 | 5 | 6

interface Props {
  size?: string
  type?: NumericPhototype
  motion?: boolean
  loop?: number
}
export type MixedProps = Props & HTMLAttributes<HTMLSpanElement>
