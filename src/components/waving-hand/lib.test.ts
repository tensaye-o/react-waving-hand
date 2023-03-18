import { positiveNumberSchema, romanize } from './lib'

describe('romanize testing', () => {
  test('input 1 and output is I', () => {
    expect(romanize(1)).toBe('I')
  })
  test('input 2 and output is II', () => {
    expect(romanize(2)).toBe('II')
  })
  test('input 3 and output is III', () => {
    expect(romanize(3)).toBe('III')
  })
  test('input 4 and output is IV', () => {
    expect(romanize(4)).toBe('IV')
  })
  test('input 5 and output is V', () => {
    expect(romanize(5)).toBe('V')
  })
  test('input 6 and output is VI', () => {
    expect(romanize(6)).toBe('VI')
  })
})

describe('positive number testing', () => {
  test('input less than 0 will throw error', () => {
    expect(() => {
      positiveNumberSchema(-1)
    }).toThrow(Error)
  })
  test('input is integer which is over than -1 is valid and will return itself', () => {
    expect(positiveNumberSchema(0)).toBe(0)
  })
})
