/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim()
  let eSeen = false
  let pointSeen = false
  let numberSeen = false
  // 表示e后面是否有数字
  let numberAfterE = true
  const reg = /\d/
  const n = s.length
  for (let i = 0; i < n; i++) {
    if (reg.test(s[i])) {
      numberSeen = true
      // e后面必须要有数字
      numberAfterE = true
    } else if (s[i] === '.') {
      // 小数点只能出现一次，并且不能出现在e的后面
      if (eSeen || pointSeen) return false
      pointSeen = true
    } else if (s[i] === 'e' || s[i] === 'E') {
      // e只能出现一次，并且只能出现在数字后面
      if (eSeen || !numberSeen) return false
      // e后面必须要有数字
      numberAfterE = false
      eSeen = true
    } else if (s[i] === '-' || s[i] === '+') {
      if (i !== 0 && s[i - 1] !== 'e') return false
    } else {
      return false
    }
  }
  return numberSeen && numberAfterE
}
