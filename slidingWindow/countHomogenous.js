/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  const mod = 10 ** 9 + 7
  let r = 0
  let str = ''
  let ans = 0
  while (r < s.length) {
    if (s[r] !== s[r - 1]) {
      str = s[r]
    } else {
      str += s[r]
    }
    ans = (ans + str.length) % mod
    r++
  }
  return ans
}
