/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  let l = 0
  let r = 0
  let ans = 0
  const count = new Map()
  count.set(0, 0)
  count.set(1, 0)
  while (r < A.length) {
    count.set(A[r], count.get(A[r]) + 1)
    while (count.get(0) > K) {
      count.set(A[l], count.get(A[l]) - 1)
      l++
    }
    ans = Math.max(ans, r - l + 1)
    r++
  }
  return ans
}
