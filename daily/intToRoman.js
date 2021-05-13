/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  if (num === 0) return ''
  const map = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  }
  const nums = Object.keys(map).sort((a, b) => b - a)
  let ans = ''
  while (num > 0) {
    for (const key of nums) {
      if (num >= key) {
        ans += map[key]
        num -= +key
        break
      }
    }
  }
  return ans
}
