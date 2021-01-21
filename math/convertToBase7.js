/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function (num) {
  if (num === 0) return '0'
  let ans = ''
  let flag = false
  if (num < 0) {
    flag = true
    num = -num
  }
  while (num) {
    const mod = num % 7
    num = Math.trunc(num / 7)
    ans = mod + ans
  }
  if (flag) ans = '-' + ans
  return ans
}
