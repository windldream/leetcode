/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    if (s[l] === s[r]) {
      l++
      r--
    } else {
      return isValidPalindrome(s.substring(l + 1, r + 1)) || isValidPalindrome(s.substring(l, r))
    }
  }

  return true

  function isValidPalindrome(str) {
    let l = 0
    let r = str.length - 1

    while (l < r) {
      if (str[l++] !== str[r--]) return false
    }

    return true
  }
}
