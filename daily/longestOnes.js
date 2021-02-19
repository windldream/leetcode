/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  let l = 0
  let r = 0
  let ans = 0
  let zeros = 0
  while (r < A.length) {
    zeros += A[r] === 0
    while (zeros > K) {
      zeros -= A[l] === 0
      l++
    }
    ans = Math.max(ans, r - l + 1)
    r++
  }
  return ans
}
