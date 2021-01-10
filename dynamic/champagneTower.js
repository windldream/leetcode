/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
const champagneTower = function(poured, query_row, query_glass) {
  const dp = Array(100).fill(0).map(() => [])
  for (let i = 0; i < 100; i++) {
    dp[i] = Array(i + 1).fill(0)
  }
  dp[0][0] = poured

  for (let i = 0; i < 99; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[i][j] > 1) {
        const drop = dp[i][j] - 1
        dp[i][j] = 1
        dp[i + 1][j] += drop / 2
        dp[i + 1][j + 1] = drop / 2
      }
    }
  }

  return dp[query_row][query_glass]
}