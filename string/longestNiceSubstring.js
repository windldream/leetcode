/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  const n = s.length
  let ans = ''
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const substr = s.substring(i, j)
      if (!check(substr)) continue
      if (substr.length > ans.length) ans = substr
    }
  }
  return ans

  function check(str) {
    for (const c of str) {
      const charCode = c.charCodeAt()
      let s
      if (charCode > 90) {
        s = String.fromCharCode(charCode - 32)
      } else {
        s = String.fromCharCode(charCode + 32)
      }
      if (!str.includes(s)) return false
    }
    return true
  }
}
