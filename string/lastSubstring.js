/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function (s) {
  let ans = s
  for (let i = 1; i < s.length; i++) {
    const str = s.substring(i)
    if (ans < str) {
      ans = str
    }
  }
  return ans
}
