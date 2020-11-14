/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let ans = ''
  while (n > 26) {
    let mod = n % 26
    n = Math.trunc(n / 26)
    if (mod === 0) {
      mod = 26
      n--
    }
    ans = String.fromCharCode(mod - 1 + 'A'.charCodeAt()) + ans
  }
  return String.fromCharCode(n - 1 + 'A'.charCodeAt()) + ans
}
