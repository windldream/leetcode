/**
 * @param {number} n
 * @param {number[][]} dependencies
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function (n, dependencies, k) {
  // pre[i] 表示修习第i门课之后能修习哪些课
  const pre = Array(n).fill(0)
  for (let [u, v] of dependencies) {
    pre[--u] |= 1 << --v
  }

  const all = 1 << n
  const dp = Array(all).fill(n)
  dp[0] = 0
  for (let state = 0; state < all; state++) {
    let next = 0
    for (let i = 0; i < n; i++) {
      if ((state & pre[i]) === pre[i]) {
        next |= 1 << i
      }
    }
    // 去重
    next &= ~state
    for (let sub = next; sub > 0; sub = (sub - 1) & next) {
      if (countBit(sub) <= k) {
        dp[state | sub] = Math.min(dp[state | sub], dp[state] + 1)
      }
    }
  }
  return dp[(1 << n) - 1]

  function countBit(num) {
    let count = 0
    while (num > 0) {
      num = num & (num - 1)
      count++
    }
    return count
  }
}

minNumberOfSemesters(
  12,
  [
    [1, 2],
    [1, 3],
    [7, 5],
    [7, 6],
    [4, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [11, 12]
  ],
  2
)
