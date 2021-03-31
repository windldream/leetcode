/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let ans = 1
  while (n) {
    if (n & 1) {
      ans *= x
    }
    x *= x
    n >>>= 1
  }
  return ans
}
