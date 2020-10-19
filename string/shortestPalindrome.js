/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const len = s.length
  if (len === 0) return ''

  const palindrome = s.split('').reverse().join('')
  let i = 0
  for (; i < len; i++) {
    if (s.substring(0, len - i) === palindrome.substring(i)) break
  }
  return palindrome.substring(0, i) + s
}

shortestPalindrome('aacecaaa')
