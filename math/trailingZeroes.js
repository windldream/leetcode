/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let count = 0
  while (n >= 5) {
    n = Math.trunc(n / 5)
    count += n
  }
  return count
}
