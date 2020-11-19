/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  const len = A.length
  if (len < 2) return 0
  A.sort((a, b) => a - b)
  const min = A[0] + K
  const max = A[len - 1] - K
  return max - min < 0 ? 0 : max - min
}
