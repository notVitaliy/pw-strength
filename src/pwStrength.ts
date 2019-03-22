import { getPosStrength } from './positive'
import { getNegStrength } from './negative'

export const pwStrength = (p: string) => {
  if (!p) return 0

  const posStrength = getPosStrength(p)
  const negStrength = getNegStrength(p)

  return Math.max(0, Math.min(100, Math.round(posStrength - negStrength)))
}
