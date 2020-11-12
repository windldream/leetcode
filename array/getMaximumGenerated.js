/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0) return 0
  const ans = Array(n + 1).fill(0)
  ans[1] = 1
  for (let i = 2; i <= n; i++) {
    if (i & 1) {
      const index = i >> 1
      ans[i] = ans[index] + ans[index + 1]
    } else {
      ans[i] = ans[i >> 1]
    }
  }
  return Math.max(...ans)
}
