/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  const temp = n ^ (n >> 1)
  return (temp & (temp + 1)) === 0
}
