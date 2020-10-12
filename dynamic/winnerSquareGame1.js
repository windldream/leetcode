/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const dp = Array(n + 1).fill(false)
  dp[1] = true
  for (let i = 2; i <= n; i++) {
    const sq = Math.floor(Math.sqrt(i))
    if (sq * sq === i) {
      dp[i] = true
      continue
    }
    for (let j = sq; j > 0; j--) {
      dp[i] |= !dp[i - j * j]
    }
  }
  return dp[n]
}
