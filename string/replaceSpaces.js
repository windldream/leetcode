/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  const m = S.replace(/\s+/g, '').length
  let emptyLen = length - m
  const reg = /\s/
  let ans = ''

  for (const c of S) {
    if (reg.test(c)) {
      if (emptyLen) {
        ans += '%20'
        emptyLen--
      }
    } else {
      ans += c
    }
  }
  return ans
}

replaceSpaces('Mr John Smith    ', 13)
