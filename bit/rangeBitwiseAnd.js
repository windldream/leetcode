/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let power = 0
  while (n > m) {
    power++
    m >>>= 1
    n >>>= 1
  }
  return m << power
}
