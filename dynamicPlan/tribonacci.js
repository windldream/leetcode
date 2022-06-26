/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 2) return n

  if (n === 2) return 1

  const f = Array(n).fill(0)
  f[1] = 1
  f[2] = 1

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2] + f[i - 3]
  }

  return f[n]
}
