/**
 * @param {number} n
 * @return {number}
 */
// var waysToStep = function (n) {
//   const mod = 10 ** 9 + 7
//   const dp = Array(n + 1).fill(0)
//   dp[0] = 1
//   for (let i = 1; i <= n; i++) {
//     dp[i] = (dp[i] + dp[i - 1]) % mod
//     if (i >= 2) dp[i] = (dp[i] + dp[i - 2]) % mod
//     if (i >= 3) dp[i] = (dp[i] + dp[i - 3]) % mod
//   }
//   return dp[n]
// }

var waysToStep = function (n) {
  if (n <= 2) return n
  if (n === 3) return 4
  const mod = 10 ** 9 + 7
  let a = 1
  let b = 2
  let c = 4
  for (let i = 4; i <= n; i++) {
    const tmp = c
    c = (a + b + c) % mod
    a = b
    b = tmp
  }
  return c
}
