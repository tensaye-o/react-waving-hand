import type { NaturalNumber, NumericPhototype, Phototype } from './type'

const TOKEN_MAP: Readonly<Record<NumericPhototype, Phototype>> = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI'
}

export const positiveNumberSchema = (x: number) => {
  if (x >= 0) return x as NaturalNumber
  throw new Error(
    '[loop] property needs to be a natural number which means it needs to be equal to or greater than 0.'
  )
}

export const romanize = (num: NumericPhototype) => TOKEN_MAP[num]
