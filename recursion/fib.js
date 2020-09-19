/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const memo = new Map()
  const mod = 10 ** 9 + 7
  return recursion(n)

  function recursion(n) {
    if (n === 0) return 0
    if (n <= 2) return 1
    if (memo.has(n)) return memo.get(n)
    const val = (recursion(n - 2) + recursion(n - 1)) % mod
    memo.set(n, val)
    return val
  }
}
