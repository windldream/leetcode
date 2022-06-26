/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n

  const f = Array(n).fill(0)
  f[0] = 0
  f[1] = 1

  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }

  return f[n]
}
