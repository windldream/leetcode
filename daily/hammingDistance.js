/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y
  let dis = 0
  while (n) {
    n = n & (n - 1)
    dis += 1
  }
  return dis
}
