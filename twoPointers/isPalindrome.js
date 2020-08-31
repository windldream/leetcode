/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0
  let r = s.length - 1
  const reg = /[A-Za-z0-9]/
  while (l < r) {
    while (!reg.test(s[l])) {
      l++
    }
    while (!reg.test(s[r])) {
      r--
    }
    if (l > r) return true
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
    l++
    r--
  }
  return true
}

isPalindrome('.,')
