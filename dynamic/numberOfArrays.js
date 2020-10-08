/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function (s, k) {
  const mod = 10 ** 9 + 7
  const len = s.length
  if (len < 1) return 1
  const dp = Array(len + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0 && i - j < 10; j--) {
      const str = s.substring(j, i)
      if (str[0] === '0') continue
      if (str > k) break
      dp[i] = (dp[i] + dp[j]) % mod
    }
  }
  return dp[len]
}
