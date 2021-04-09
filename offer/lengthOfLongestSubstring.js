/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0
  let r = 0
  let ans = 0
  while (r < s.length) {
    r++
    while (l < r && s.substring(l, r).indexOf(s[r - 1]) !== s.substring(l, r).lastIndexOf(s[r - 1])) {
      l++
    }
    ans = Math.max(ans, r - l)
  }
  return ans
}
