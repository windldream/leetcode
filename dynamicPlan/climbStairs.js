/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const f = Array(n).fill(1)
  f[1] = 1

  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }

  return f[n]
}
