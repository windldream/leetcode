/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const total = cardPoints.reduce((prev, curr) => prev + curr, 0)
  const len = cardPoints.length
  let l = 0
  let r = 0
  let min = Infinity
  let sum = 0
  while (r < len) {
    sum += cardPoints[r++]
    while (r - l > len - k) {
      sum -= cardPoints[l++]
    }
    if (r - l === len - k) {
      min = Math.min(min, sum)
    }
  }
  return total - min
}
