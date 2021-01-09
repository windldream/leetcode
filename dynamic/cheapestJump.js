/**
 * @param {number[]} A
 * @param {number} B
 * @return {number[]}
 */
const cheapestJump = function (A, B) {
  const n = A.length
  const dp = Array(n).fill(Infinity)
  const path = Array(n)
    .fill(0)
    .map(() => [])
  dp[0] = 0
  path[0].push(1)
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= B; j++) {
      if (i - j >= 0 && A[i] !== -1) {
        if (dp[i] > dp[i - j] + A[i - j]) {
          dp[i] = dp[i - j] + A[i - j]
          const arr = path[i - j].concat(i + 1)
          path[i] = arr
        } else if (dp[i] === dp[i - j] + A[i - j] && dp[i] !== Infinity) {
          const arr = path[i - j].concat(i + 1)
          if (!compare(path[i], arr)) {
            path[i] = arr
          }
        }
      }
    }
  }
  return path[n - 1]

  function compare(a, b) {
    const n = a.length
    const m = b.length
    for (let i = 0; i < Math.min(n, m); i++) {
      if (a[i] < b[i]) return true
    }
    return false
  }
}

cheapestJump([1, 2, 4, -1, 2], 1)
