/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const len = s.length
  let l = 0
  let r = len - 1
  let ans = len
  while (l < r) {
    if (s[l] !== s[r]) break
    l++
    r--
    while (s[l] === s[l - 1]) {
      l++
    }
    while (s[r] === s[r + 1]) {
      r--
    }
    ans = Math.min(ans, r - l + 1)
  }
  return Math.max(ans, 0)
}

minimumLength('aabccabba')
