/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0
  let l = 0
  let r = 0
  let str = ''
  while (r < s.length) {
    str += s[r]
    while (str.indexOf(s[r]) !== str.lastIndexOf(s[r])) {
      str = s.substring(++l, r + 1)
    }
    ans = Math.max(ans, r - l + 1)
    r++
  }
  return ans
}

lengthOfLongestSubstring('abcabcbb')
