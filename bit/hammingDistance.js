/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y
  let res = 0
  while (n !== 0) {
    if (n & 1) {
      res++
    }
    n >>= 1
  }
  return res
}
