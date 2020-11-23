/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if (s.length === 0) return false
  s = s.trim()
  const len = s.length
  const reg = /\d/
  let numberSeen = false
  let pointerSeen = false
  let eSeen = false
  let numberAfterE = true
  for (let i = 0; i < len; i++) {
    if (reg.test(s[i])) {
      numberSeen = true
      numberAfterE = true
    } else if (s[i] === '.') {
      if (eSeen || pointerSeen) return false
      pointerSeen = true
    } else if (s[i] === 'e' || s[i] === 'E') {
      if (eSeen || !numberSeen) return false
      eSeen = true
      numberAfterE = false
    } else if (s[i] === '-' || s[i] === '+') {
      if (i !== 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') return false
    } else {
      return false
    }
  }
  return numberSeen && numberAfterE
}

isNumber('1')
