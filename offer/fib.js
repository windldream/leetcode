/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const mod = 10 ** 9 + 7
  if (n === 0) return 0
  if (n <= 2) return 1
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    const tmp = b
    b = (a + b) % mod
    a = tmp
  }
  return b
}
