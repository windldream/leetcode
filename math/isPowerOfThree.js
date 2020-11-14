/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n >= 3) {
    if (n % 3) return false
    n = n / 3
  }
  return n === 1
}
