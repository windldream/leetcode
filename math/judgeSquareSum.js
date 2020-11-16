/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  const sq = Math.sqrt(c)
  for (let a = 0; a <= sq; a++) {
    const b = Math.trunc(Math.sqrt(c - a * a))
    if (b * b === c - a * a) return true
  }
  return false
}
