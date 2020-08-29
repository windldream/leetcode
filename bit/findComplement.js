/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let power = 0
  let res = num
  while (num !== 0) {
    res ^= 1 << power
    power++
    num >>= 1
  }
  return res
}
