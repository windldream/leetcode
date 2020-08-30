/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  let max = 1 << k
  for (let i = 0; i < max; i++) {
    let str = i.toString(2)
    if (str.length < k) {
      str = '0'.repeat(k - str.length) + str
    }
    if (!s.includes(str)) return false
  }
  return true
}
