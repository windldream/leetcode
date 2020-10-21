/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
    }
    i++
    j--
  }
  return true

  function isPalindrome(str, l, r) {
    while (l < r) {
      if (str[l++] !== str[r--]) return false
    }
    return true
  }
}

validPalindrome('abca')
