/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const dp = []
  const p = []
  for (let i = 0; i < primes.length; i++) {
    p[i] = 0
  }

  dp[0] = 1
  for (i = 1; i < n; i++) {
    const min = Math.min.apply(
      null,
      primes.map((val, index) => dp[p[index]] * val)
    )
    for (let j = 0; j < primes.length; j++) {
      if (dp[p[j]] * primes[j] === min) {
        p[j] += 1
      }
    }
    dp[i] = min
  }

  return dp[n - 1]
}
