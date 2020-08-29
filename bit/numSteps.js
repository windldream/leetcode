/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let res = 0
  let r = s.length - 1
  s = s.split('')
  while (r > 0) {
    if (s[r] === '0') {
      r--
      res++
    } else {
      res++
      while (r >= 0 && s[r] == '1') {
        res++
        r--
      }
      if (r > 0) {
        s[r] = '1'
      }
    }
  }
  return res
}

numSteps('10')
