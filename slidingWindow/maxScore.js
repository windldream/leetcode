/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const len = cardPoints.length
  const total = cardPoints.reduce((pre, cur) => pre + cur, 0)
  if (len === k) return total
  let ans = 0
  let l = 0
  let r = 0
  let sum = 0
  while (r < len) {
    sum += cardPoints[r]
    if (r - l + 1 >= len - k) {
      ans = Math.max(ans, total - sum)
      sum -= cardPoints[l]
      l++
    }
    r++
  }
  return ans
}
