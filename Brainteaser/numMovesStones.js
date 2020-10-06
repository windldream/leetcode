/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
  const arr = [a, b, c]
  arr.sort((a, b) => a - b)
  ;[a, b, c] = arr

  const diff1 = b - a
  const diff2 = c - b
  if (diff1 === 1 && diff2 === 1) return [0, 0]
  if (diff1 === 1) {
    return [1, diff2 - 1]
  }
  if (diff2 === 1) {
    return [1, diff1 - 1]
  }

  return [Math.min(diff1 - 1, diff2 - 1, 2), diff1 - 1 + diff2 - 1]
}
