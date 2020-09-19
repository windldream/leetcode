/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const memo = new Map()
  return recursion(n)

  function recursion(n) {
    if (n === 0) return 0
    if (n <= 2) return 1
    if (memo.has(n)) return memo.get(n)
    const val = recursion(n - 3) + recursion(n - 2) + recursion(n - 1)
    memo.set(n, val)
    return val
  }
}
