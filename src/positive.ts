const lowerRegex = /[a-z]/g
const upperRegex = /[A-Z]/g
const numberRegex = /\d/g
const symbolsRegex = /[^A-Za-z0-9]/g

export const countPositive = (p: string) => {
  const cLower = getCountLower(p)
  const cUpper = getCountUpper(p)
  const cNumbers = getCountNumbers(p)
  const cSymbols = getCountSymbols(p)
  const cMidNumber = getCountMidNumber(p)
  const cMidSymbol = getCountMidSymbol(p)

  const positiveCounts = { cLower, cUpper, cNumbers, cSymbols, cMidNumber, cMidSymbol }

  const reqs = Object.keys(positiveCounts).reduce(
    (previous, key) => previous + Math.min(1, positiveCounts[key]),
    p.length >= 8 ? 1 : 0
  )

  return { cLower, cUpper, cNumbers, cSymbols, cMidNumber, cMidSymbol, reqs: reqs >= 3 ? reqs : 0 }
}

export const getCountLower = (p: string) => {
  const lower = p.match(lowerRegex)
  return lower ? lower.length : 0
}

export const getCountUpper = (p: string) => {
  const upper = p.match(upperRegex)
  return upper ? upper.length : 0
}

export const getCountNumbers = (p: string) => {
  const number = p.match(numberRegex)
  return number ? number.length : 0
}

export const getCountSymbols = (p: string) => {
  const symbols = p.match(symbolsRegex)
  return symbols ? symbols.length : 0
}

export const getCountMidNumber = (p: string) => {
  const midNum = p.slice(1, -1)
  const middleNumber = midNum.match(numberRegex)
  return middleNumber ? middleNumber.length : 0
}

export const getCountMidSymbol = (p: string) => {
  const middleSymbol = p.slice(1, -1).match(symbolsRegex)
  return middleSymbol ? middleSymbol.length : 0
}

export const getPosStrength = (p: string) => {
  const { cLower, cUpper, cNumbers, cSymbols, cMidNumber, cMidSymbol, reqs } = countPositive(p)

  const length = p.length * 4
  const upper = cUpper ? (p.length - cUpper) * 2 : 0
  const lower = cLower ? (p.length - cLower) * 2 : 0
  const either = cUpper || cLower ? cNumbers * 4 : 0

  const symbols = cSymbols * 6
  const middle = (cMidSymbol + cMidNumber) * 2

  return length + upper + lower + either + symbols + middle + reqs * 2
}
