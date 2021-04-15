/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const n = s1.length
  // dp[i][j][k]表示字符串s1的i位置和字符串s2的j位置长度为k，是否满足
  const dp = Array(n)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => Array(n + 1).fill(0))
    )
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j][1] = s1[i] === s2[j]
    }
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      for (let j = 0; j <= n - len; j++) {
        for (let k = 1; k < len; k++) {
          // s1 -> t1   s2 -> t2
          if (dp[i][j][k] && dp[i + k][j + k][len - k]) {
            dp[i][j][len] = true
            break
          }

          // s1 -> t2   s2 -> t1
          if (dp[i][j + len - k][k] && dp[i + k][j][len - k]) {
            dp[i][j][len] = true
          }
        }
      }
    }
  }
  return dp[0][0][n]
}

//
// t2 j + k
