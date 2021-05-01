/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let ans = ''
  for (let i = 0; i < s.length; i += 2) {
    if (i < s.length - 1) {
      ans += s[i]
      ans += String.fromCharCode(s[i].charCodeAt() + +s[i + 1])
    } else {
      ans += s[i]
    }
  }
  return ans
}
