/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim()
  const len = s.length
  let pointSeen = false
  let eSeen = false
  let numberSeen = false
  let numberAfterE = true
  for (let i = 0; i < len; i++) {
    if (/\d/.test(s[i])) {
      numberSeen = true
      numberAfterE = true
    } else if (s[i] === '.') {
      if (eSeen || pointSeen) {
        return false
      }
      pointSeen = true
    } else if (s[i] === 'e') {
      if (eSeen || !numberSeen) {
        return false
      }
      numberAfterE = false
      eSeen = true
    } else if (s[i] === '-' || s[i] === '+') {
      if (i !== 0 && s[i - 1] !== 'e') {
        return false
      }
    } else {
      return false
    }
  }
  return numberSeen && numberAfterE
}

isNumber('1 4')
