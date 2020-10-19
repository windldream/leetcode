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
  return (
    s
      .substring(len - i)
      .split('')
      .reverse()
      .join('') + s
  )
}

shortestPalindrome('aacecaaa')
