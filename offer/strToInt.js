/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  str = str.trim()
  const n = str.length
  const max = 2 ** 31 - 1
  const min = -(2 ** 31)
  const reg = /\d/
  let ans = ''
  let isPositive = true
  for (let i = 0; i < n; i++) {
    if (i === 0 && (str[i] === '-' || str[i] === '+')) {
      isPositive = str[i] === '+'
    } else if (reg.test(str[i])) {
      ans += str[i]
    } else {
      break
    }
  }

  if (ans.length === 0) return 0
  if (isPositive) {
    ans = +ans
    return ans < max ? ans : max
  } else {
    ans = -ans
    return ans > min ? ans : min
  }
}
