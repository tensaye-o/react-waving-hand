import { positiveNumberSchema, romanize } from './lib'

describe('romanize testing', () => {
  it('input 1 and output is I', () => {
    expect.hasAssertions()
    expect(romanize(1)).toBe('I')
  })
  it('input 2 and output is II', () => {
    expect.hasAssertions()
    expect(romanize(2)).toBe('II')
  })
  it('input 3 and output is III', () => {
    expect.hasAssertions()
    expect(romanize(3)).toBe('III')
  })
  it('input 4 and output is IV', () => {
    expect.hasAssertions()
    expect(romanize(4)).toBe('IV')
  })
  it('input 5 and output is V', () => {
    expect.hasAssertions()
    expect(romanize(5)).toBe('V')
  })
  it('input 6 and output is VI', () => {
    expect.hasAssertions()
    expect(romanize(6)).toBe('VI')
  })
})

describe('positive number testing', () => {
  it('input less than 0 will throw error', () => {
    expect.hasAssertions()
    expect(() => {
      positiveNumberSchema(-1)
    }).toThrow(Error)
  })
  it('input is integer which is over than -1 is valid and will return itself', () => {
    expect.hasAssertions()
    expect(positiveNumberSchema(0)).toBe(0)
  })
})
