/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  return recursion(n, 0, 1, 1)

  function recursion(n, n1, n2, n3) {
    if (n === 0) return n1
    if (n === 1) return n2
    if (n === 2) return n3
    return recursion(n - 1, n2, n3, n1 + n2 + n3)
  }
}
