import {
  stringReverse,
  getConsecLower,
  getConsecUpper,
  getConsecNumber,
  getOnlyLetters,
  getOnlyNumbers,
  countSequence,
  countRepeated,
  getNegStrength,
} from './negative'

describe('Negative', () => {
  const letters = 'abcdefg'
  const backwards = 'gfedcba'
  const numbers = '1234567'

  test('can reverse strings', () => {
    const result = stringReverse(letters)

    expect(result).toBe(backwards)
  })

  test('can count consecutive lowercase', () => {
    const result = getConsecLower(letters)

    expect(result).toBe(letters.length)
  })

  test('can count consecutive uppercase', () => {
    const result = getConsecUpper(letters.toUpperCase())

    expect(result).toBe(letters.length)
  })

  test('can count consecutive number', () => {
    const result = getConsecNumber(numbers)

    expect(result).toBe(numbers.length)
  })

  test('can detect only letters', () => {
    const result = getOnlyLetters(letters)

    expect(result).toBe(true)
  })

  test('can detect only numbers', () => {
    const result = getOnlyNumbers(numbers)

    expect(result).toBe(true)
  })

  test('can count sequential characters', () => {
    const result = countSequence(letters, letters)

    expect(result).toBe(letters.length)
  })

  test('can count repeated characters', () => {
    const count = 7
    // prettier-ignore
    const repeated = Array(count).fill('a').join('')

    const result = countRepeated(repeated)

    expect(result).toBe(count)
  })

  describe('scoring', () => {
    test('0 negative', () => {
      const str = 'aC1$'

      const result = getNegStrength(str)

      expect(result).toBe(0)
    })

    test('4 negative', () => {
      const str = 'aeC1$'

      const result = getNegStrength(str)

      expect(result).toBe(4)
    })

    test('8 negative', () => {
      const str = 'aeCF1$'

      const result = getNegStrength(str)

      expect(result).toBe(8)
    })

    test('12 negative', () => {
      const str = 'aeCF13$'

      const result = getNegStrength(str)

      expect(result).toBe(12)
    })

    test('15 negative', () => {
      const str = 'aeCFgH13$'

      const result = getNegStrength(str)

      expect(result).toBe(15)
    })

    test('18 negative', () => {
      const str = '1234'

      const result = getNegStrength(str)

      expect(result).toBe(18)
    })

    test('22 negative', () => {
      const str = 'aeCFgH13$678'

      const result = getNegStrength(str)

      expect(result).toBe(22)
    })

    test('25 negative', () => {
      const str = 'aeCFgH13$678()='

      const result = getNegStrength(str)

      expect(result).toBe(25)
    })

    test('33 negative', () => {
      const str = 'aeCFgH13$678()=5yyyy'

      const result = getNegStrength(str)

      expect(result).toBe(33)
    })
  })
})
