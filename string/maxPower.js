/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let ans = 1
  let i = 1
  let cur = 1
  while (i < s.length) {
    if (s[i] === s[i - 1]) {
      cur++
    } else {
      ans = Math.max(ans, cur)
      cur = 1
    }
    i++
  }
  return Math.max(ans, cur)
}
