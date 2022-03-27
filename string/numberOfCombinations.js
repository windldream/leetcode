/**
 * @param {string} num
 * @return {number}
 */
var numberOfCombinations = function (num) {
  if (num[0] === '0') return 0

  const n = num.length
  const mod = 1e9 + 7
  const lcp = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (num[i] === num[j]) {
        // 从第i个字符开始以及第j个字符开始两个字符串的最长公共前缀
        lcp[i][j] = lcp[i + 1][j + 1] + 1
      }
    }
  }

  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i < n; i++) {
    if (num[i] === '0') continue

    for (let j = i, k = i - 1, sum = 0; j < n; j++) {
      dp[i][j] = sum

      if (k < 0) continue

      if (num[k] > '0' && lessEq(k, i, j + 1, lcp, num)) {
        dp[i][j] = (dp[i][j] + dp[k][i - 1]) % mod
      }

      sum = (sum + dp[k][i - 1]) % mod
      k--
    }
  }

  let ans = 0

  for (let i = 0; i < n; i++) {
    ans = (ans + dp[i][n - 1]) % mod
  }

  return ans

  function lessEq(l1, l2, r2, lcp, num) {
    const l = lcp[l1][l2]

    return l >= r2 - l2 || num[l1 + l] < num[l2 + l]
  }
}
