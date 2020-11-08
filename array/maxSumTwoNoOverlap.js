/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function (A, L, M) {
  const len = A.length
  const prefixSum = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + A[i]
  }

  let ans = 0
  for (let i = 0; i <= len - L; i++) {
    const l = prefixSum[i + L] - prefixSum[i]
    if (i - M >= 0) {
      for (let j = 0; j <= i - M; j++) {
        const r = prefixSum[j + M] - prefixSum[j]
        ans = Math.max(ans, l + r)
      }
    }
    for (let j = i + L; j <= len - M; j++) {
      const r = prefixSum[j + M] - prefixSum[j]
      ans = Math.max(ans, l + r)
    }
  }
  return ans
}

maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2)
