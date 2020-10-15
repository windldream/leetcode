/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
  const mod = 10 ** 9 + 7
  const len = locations.length
  const dp = Array(len)
    .fill(0)
    .map(() => Array(fuel + 1).fill(0))

  dp[start][fuel] = 1
  for (let k = fuel; k >= 0; k--) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (i === j) continue
        const d = Math.abs(locations[i] - locations[j])
        if (k - d >= 0) {
          dp[j][k - d] = (dp[j][k - d] + dp[i][k]) % mod
        }
      }
    }
  }

  let ans = 0
  for (let i = 0; i <= fuel; i++) {
    ans = (ans + dp[finish][i]) % mod
  }
  return ans
}
