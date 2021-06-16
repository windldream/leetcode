/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim()
  let eSeen = false
  let PointSeen = false
  let numberSeen = false
  let numberAfterE = true
  let regNum = /\d/
  const n = s.length
  for (let i = 0; i < n; i++) {
    if (regNum.test(s[i])) {
      numberSeen = true
      numberAfterE = true
    } else if (s[i] === '.') {
      if (eSeen || PointSeen) return false
      PointSeen = true
    } else if (s[i].toLowerCase() === 'e') {
      if (eSeen || !numberSeen) return false
      eSeen = true
      numberAfterE = false
    } else if (s[i] === '-' || s[i] === '+') {
      if (i !== 0 && s[i - 1].toLowerCase() !== 'e') return false
    } else {
      return false
    }
  }
  return numberSeen && numberAfterE
}
