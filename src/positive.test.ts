import {
  getCountLower,
  getCountUpper,
  getCountNumbers,
  getCountSymbols,
  getCountMidNumber,
  getCountMidSymbol,
  getPosStrength,
} from './positive'

describe('Positive', () => {
  const letters = 'abcdefg'
  const numbers = '1234567'
  const symbols = '!@#$%^&'

  test('can count lowercase characters', () => {
    const result = getCountLower(letters)

    expect(result).toBe(letters.length)
  })

  test('can count uppercase characters', () => {
    const result = getCountUpper(letters.toUpperCase())

    expect(result).toBe(letters.length)
  })

  test('can count number characters', () => {
    const result = getCountNumbers(numbers)

    expect(result).toBe(numbers.length)
  })

  test('can count symbol characters', () => {
    const result = getCountSymbols(symbols)

    expect(result).toBe(symbols.length)
  })

  test('can count mid numbers', () => {
    const result = getCountMidNumber(`a${numbers}a`)

    expect(result).toBe(numbers.length)
  })

  test('can count mid symbols', () => {
    const result = getCountMidSymbol(`a${symbols}a`)

    expect(result).toBe(symbols.length)
  })

  describe('scoring', () => {
    test('0 positive', () => {
      const result = getPosStrength('')

      expect(result).toBe(0)
    })

    test('4 positive', () => {
      const result = getPosStrength('a')

      expect(result).toBe(4)
    })

    test('16 positive', () => {
      const result = getPosStrength('abcd')

      expect(result).toBe(16)
    })

    test('30 positive', () => {
      const result = getPosStrength('abcdE')

      expect(result).toBe(30)
    })

    test('48 positive', () => {
      const result = getPosStrength('abcdE1')

      expect(result).toBe(48)
    })

    test('68 positive', () => {
      const result = getPosStrength('abcdE1%')

      expect(result).toBe(68)
    })

    test('148 positive', () => {
      const result = getPosStrength('abcdE1%nFk5*i2f')

      expect(result).toBe(148)
    })
  })
})
