const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '01234567890'
const SYMBOLS = '\\!@#$%&/()=?¿'

const lowerRegex = /(?=([a-z]{2}))/g
const upperRegex = /(?=([A-Z]{2}))/g
const consecNumberRegex = /(?=(\d{2}))/g
const onlyNumbersRegex = /^[0-9]*$/g
const onlyLettersRegex = /^([a-z]|[A-Z])*$/g

// prettier-ignore
export const stringReverse = (str: string) => str.split('').reverse().join('')

export const countNegative = (p: string) => {
  const consecLower = getConsecLower(p)
  const consecUpper = getConsecUpper(p)
  const consecNumber = getConsecNumber(p)
  const onlyNumbers = getOnlyNumbers(p)
  const onlyLetters = getOnlyLetters(p)

  return { consecLower, consecUpper, consecNumber, onlyNumbers, onlyLetters }
}

export const getConsecLower = (p: string) => {
  const lower = p.match(lowerRegex)
  const consecLower = lower ? lower.length + 1 : 0
  return consecLower
}

export const getConsecUpper = (p: string) => {
  const upper = p.match(upperRegex)
  const consecUpper = upper ? upper.length + 1 : 0
  return consecUpper
}

export const getConsecNumber = (p: string) => {
  const number = p.match(consecNumberRegex)
  const consecNumber = number ? number.length + 1 : 0
  return consecNumber
}

const getOnly = (regex: RegExp) => (p: string) => !!p.match(regex)
export const getOnlyLetters = getOnly(onlyLettersRegex)
export const getOnlyNumbers = getOnly(onlyNumbersRegex)

export const countSequence = (p: string, s: string) =>
  s.split('').reduce((acc, k, i) => {
    const p2 = p.toLowerCase()
    const forth = s.substring(i, i + 3)
    const back = stringReverse(forth)
    if (p2.indexOf(forth) !== -1 || p2.indexOf(back) !== -1) acc++
    return acc
  }, 0)

export const countRepeated = (p: string) =>
  Array.from(new Set(p.toLowerCase().split(''))).reduce((acc, c) => {
    const countRegex = new RegExp(`[^${c}]`, 'g')
    const count = p.replace(countRegex, '').length
    return count > 1 ? acc + count : acc
  }, 0)

export const getNegStrength = (p: string) => {
  const seqLetter = countSequence(p, LETTERS)
  const seqNumber = countSequence(p, NUMBERS)
  const seqSymbol = countSequence(p, SYMBOLS)

  const { consecLower, consecUpper, consecNumber, onlyNumbers, onlyLetters } = countNegative(p)

  const negCountRepeated = countRepeated(p)

  const lower = consecLower * 2
  const upper = consecUpper * 2
  const number = consecNumber * 2
  const sLetter = seqLetter * 3
  const sNumber = seqNumber * 3
  const sSymbol = seqSymbol * 3
  const numbers = onlyNumbers ? p.length : 0
  const letters = onlyLetters ? p.length : 0
  const repeated = negCountRepeated ? (negCountRepeated / p.length) * 10 : 0

  return lower + upper + number + sLetter + sNumber + sSymbol + numbers + letters + repeated
}
