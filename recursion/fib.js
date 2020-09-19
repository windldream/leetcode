/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  return helper(n, 0, 1)
  function helper(n, n1, n2) {
    if (n === 0) return n1
    return helper(n - 1, n2, (n2 + n1) % (10 ** 9 + 7))
  }
}
