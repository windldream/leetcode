/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  let ans = '0.'
  let i = 30
  while (num > 0 && i--) {
    num *= 2
    if (num >= 1) {
      ans += '1'
      num--
    } else {
      ans += '0'
    }
  }
  return num != 0 ? 'ERROR' : ans
}

printBin(0.625)
