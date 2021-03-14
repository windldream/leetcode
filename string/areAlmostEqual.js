/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let str1 = ''
  let str2 = ''
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      str1 += s1[i]
      str2 += s2[i]
      if (str1.length > 2) return false
    }
  }

  if (str1.length === 0) return true
  if (str1.length === 1) return false
  return str1[0] === str2[1] && str1[1] === str2[0]
}
