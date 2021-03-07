/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  const index = s.indexOf('1')
  if (index === -1) return true
  const lastIndex = s.lastIndexOf('1')
  if (index === lastIndex) return true
  for (let i = index; i < lastIndex; i++) {
    if (s[i] !== '1') return false
  }
  return true
}
