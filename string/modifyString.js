/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  if (s.length === 1) {
    return s === '?' ? 'a' : s
  }
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      if (i === 0) {
        if (s[i + 1] === 'z') {
          ans = 'a'
        } else {
          if (s[i + 1] === '?') {
            ans = 'a'
          } else {
            ans = String.fromCharCode(s[i + 1].charCodeAt() + 1)
          }
        }
      } else {
        const num = 'a'.charCodeAt()
        for (let j = 0; j < 26; j++) {
          if (ans[ans.length - 1].charCodeAt() - num !== j) {
            if (s[i + 1]) {
              if (s[i + 1].charCodeAt() - num !== j) {
                ans += String.fromCharCode(num + j)
                break
              }
            } else {
              ans += String.fromCharCode(num + j)
              break
            }
          }
        }
      }
    } else {
      ans += s[i]
    }
  }
  return ans
}
modifyString('?a?ub???w?b')
