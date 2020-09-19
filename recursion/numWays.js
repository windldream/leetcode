/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  const mod = 10 ** 9 + 7
  return helper(n, 1, 1)

  function helper(n, n1, n2) {
    if (n === 0) return n1
    if (n === 1) return n2
    return helper(n - 1, n2, (n1 + n2) % mod)
  }
}
