/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const len = s.length
  for (let i = 0; i < len >> 1; i++) {
    const str = s.substring(0, i + 1)
    if (len % str.length === 0) {
      if (str.repeat(len / str.length) === s) return true
    }
  }
  return false
}
