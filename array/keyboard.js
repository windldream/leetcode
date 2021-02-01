/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var keyboard = function (k, n) {
  const mod = BigInt(10 ** 9 + 7)
  const comb = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0n))
  comb[0][0] = 1n
  for (let i = 1; i <= n; i++) {
    comb[i][0] = 1n
    for (let j = 1; j <= i; j++) {
      comb[i][j] = comb[i - 1][j - 1] + comb[i - 1][j]
    }
  }

  const dp = Array(n + 1).fill(0n)
  dp[0] = 1n
  for (let i = 0; i < 26; i++) {
    for (let j = n; j >= 1; j--) {
      for (let s = 1; s <= k && s <= j; s++) {
        dp[j] += dp[j - s] * comb[j][s]
        dp[j] %= mod
      }
    }
  }
  return dp[n]
}

keyboard(1, 2)
