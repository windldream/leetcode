/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  let left = A[0]
  let ans = -Infinity
  for (let i = 1; i < A.length; i++) {
    ans = Math.max(ans, left + A[i] - i)
    left = Math.max(left, A[i] + i)
  }
  return ans
}

maxScoreSightseeingPair([8, 1, 5, 2, 6])
