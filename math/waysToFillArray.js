/**
 * @param {number[][]} queries
 * @return {number[]}
 */
var waysToFillArray = function (queries) {
  const len = queries.length
  const mod = 10 ** 9 + 7
  const maxc = 15
  let maxn = 0
  let maxk = 0
  for (const [n, k] of queries) {
    maxn = Math.max(maxn, n)
    maxk = Math.max(maxk, k)
  }

  const dp = Array(maxn + 1)
    .fill(0)
    .map(() => Array(maxc + 1).fill(0))
  for (let i = 1; i <= maxc; i++) {
    dp[1][i] = 1
  }
  for (let i = 1; i <= maxn; i++) {
    dp[i][0] = 1
  }
  for (let i = 2; i <= maxn; i++) {
    for (let j = 1; j <= maxc; j++) {
      for (let k = 0; k <= j; k++) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % mod
      }
    }
  }

  const isPrime = Array(maxk + 1).fill(1)
  const primes = []
  for (let i = 2; i <= maxk; i++) {
    if (isPrime[i] === 1) {
      primes.push(i)
    }
    for (let j = i * 2; j <= i * i && j <= maxk; j += i) {
      isPrime[j] = 0
    }
  }

  const ans = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    const [n, k] = queries[i]
    const counts = []
    for (const p of primes) {
      if (p > k) break
      let count = 0
      let left = k
      while (left % p === 0) {
        left = left / p
        count++
      }
      if (count > 0) {
        counts.push(count)
      }
    }

    let res = 1n
    for (const count of counts) {
      res *= BigInt(dp[n][count])
    }
    ans[i] = res % BigInt(mod)
  }
  return ans
}
