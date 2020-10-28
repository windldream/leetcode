/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  const len = s.length
  if (len < 2) return len
  let l = 0
  let r = len - 1
  while (l < r) {
    if (s[l++] != s[r--]) return 2
  }
  return 1
}
