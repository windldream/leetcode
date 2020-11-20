/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  if (N === 0) return 1
  let res = N
  let pow = 0
  while (N > 0) {
    res ^= 1 << pow++
    N = N >> 1
  }
  return res
}
