/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let max0 = s[0] === '0' ? 1 : 0
  let max1 = s[0] === '1' ? 1 : 0
  let count0 = max0
  let count1 = max1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      if (s[i] === '0') max0++
      else max1++
    } else {
      count0 = Math.max(max0, count0)
      count1 = Math.max(max1, count1)
      max0 = s[i] === '0' ? 1 : 0
      max1 = s[i] === '1' ? 1 : 0
    }
  }
  count0 = Math.max(max0, count0)
  count1 = Math.max(max1, count1)
  return count1 > count0
}
