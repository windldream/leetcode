/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindrome(word)) return word
  }

  return ''

  function isPalindrome(str) {
    let l = 0
    let r = str.length - 1

    while (l < r) {
      if (str[l++] !== str[r--]) return false
    }

    return true
  }
}
