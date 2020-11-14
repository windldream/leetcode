/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    let n = 0
    while (num > 0) {
      n += num % 10
      num = Math.trunc(num / 10)
    }
    num = n
  }
  return num
}
