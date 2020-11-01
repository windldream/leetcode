/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  str = str.trim()
  if (str.length === 0) return 0

  const max = 2 ** 31 - 1
  const min = -(2 ** 31)
  const numReg = /\d/
  let num = ''
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (str[i] === '+' || str[i] === '-' || numReg.test(str[i])) {
        num += str[i]
      } else {
        return 0
      }
    } else {
      if (numReg.test(str[i])) {
        num += str[i]
      } else {
        break
      }
    }
  }

  num = +num
  if (num > max) {
    return max
  } else if (num < min) {
    return min
  } else if (num === '+' || num === '-') {
    return 0
  }
  return num
}
