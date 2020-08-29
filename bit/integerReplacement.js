/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let count = 0
  if (n === 1) return count
  if (n % 2 === 0) {
    return integerReplacement(n / 2) + 1
  } else {
    return Math.min(integerReplacement(n + 1), integerReplacement(n - 1)) + 1
  }
}
