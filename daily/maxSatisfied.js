/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  const n = customers.length
  const prefixSum = Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] += (grumpy[i] === 0 ? customers[i] : 0) + prefixSum[i]
  }

  let l = 0
  let r = 0
  let ans = 0
  let count = 0
  while (r < n) {
    count += customers[r++]
    while (r - l > X) {
      count -= customers[l++]
    }
    ans = Math.max(ans, prefixSum[n] - prefixSum[r] + prefixSum[l] + count)
  }
  return ans
}

maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)

// 1 X
