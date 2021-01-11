/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {
  const mod = 10 ** 9 + 7
  const n = words[0].length
  const m = target.length
  const maps = Array(n)
    .fill(0)
    .map(() => Array(26).fill(0))
  for (let i = 0; i < n; i++) {
    for (const word of words) {
      const index = getIndex(word[i], 'a')
      maps[i][index] += 1
    }
  }

  const dp = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0))
  const firstIndex = getIndex(target[0], 'a')
  dp[0][0] = maps[0][firstIndex]
  for (let i = 1; i < n; i++) {
    dp[i][0] = (dp[i - 1][0] + maps[i][firstIndex]) % mod
    for (let j = 1; j < m; j++) {
      const index = getIndex(target[j], 'a')
      const count = maps[i][index]
      dp[i][j] = (dp[i - 1][j] + ((dp[i - 1][j - 1] * count) % mod)) % mod
    }
  }
  return dp[n - 1][m - 1]

  function getIndex(a, b) {
    return a.charCodeAt() - b.charCodeAt()
  }
}

numWays(['acca', 'bbbb', 'caca'], 'aba')
