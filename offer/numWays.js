/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n <= 1) return 1

  const mod = 10 ** 9 + 7
  let a = 1
  let b = 1
  for (let i = 2; i <= n; i++) {
    const tmp = b
    b = (a + b) % mod
    a = tmp
  }
  return b
}

// dp[n] = dp[n - 1] + dp[n - 2]
