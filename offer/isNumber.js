/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim()
  let eSeen = false
  let pointSeen = false
  let numberSeen = false
  let numberAfterE = true
  const reg = /\d/
  const n = s.length
  for (let i = 0; i < n; i++) {
    if (reg.test(s[i])) {
      numberSeen = true
      numberAfterE = true
    } else if (s[i] === '.') {
      if (pointSeen || eSeen) return false
      pointSeen = true
    } else if (s[i] === 'e' || s[i] === 'E') {
      if (eSeen || !numberSeen) return false
      eSeen = true
      numberAfterE = false
    } else if (s[i] === '+' || s[i] === '-') {
      if (i !== 0) {
        if (s[i - 1] !== 'e' && s[i - 1] !== 'E') return false
      }
    } else {
      return false
    }
  }
  return numberSeen && numberAfterE
}

// . 'e', 'E', '+', '-'
