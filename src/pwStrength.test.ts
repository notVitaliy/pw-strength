import { pwStrength } from './pwStrength'

describe('pwStrength', () => {
  test('can get a score', () => {
    const result = pwStrength('TestPassword')

    expect(result).toBe(46)
  })

  test('can score high', () => {
    const result = pwStrength('Test4*3Nsadj#;aPassword')

    expect(result).toBe(100)
  })

  test('can score low', () => {
    const result = pwStrength('abcdefg')

    expect(result).toBe(0)
  })

  test('can score no password', () => {
    const result = pwStrength('')

    expect(result).toBe(0)
  })
})
