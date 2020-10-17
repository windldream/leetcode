/**
 * @param {number} n
 * @return {number}
 */
var numberOf2sInRange = function (n) {
  if (n === 0) return 0
  const digit = Math.trunc(Math.log10(n)) + 1
  const dp = Array(digit + 1)
    .fill(0)
    .map(() => Array(2).fill(0))
  dp[1][0] = n % 10 >= 2 ? 1 : 0
  dp[1][1] = 1
  for (let i = 2; i <= digit; i++) {
    const k = Math.trunc((n / Math.trunc(Math.pow(10, i - 1))) % 10)
    dp[i][0] = k * dp[i - 1][1] + dp[i - 1][0]
    if (k === 2) {
      dp[i][0] += (n % Math.pow(10, i - 1)) + 1
    } else if (k > 2) {
      dp[i][0] += Math.pow(10, i - 1)
    }
    dp[i][1] = 10 * dp[i - 1][1] + Math.pow(10, i - 1)
  }
  return dp[digit][0]
}
