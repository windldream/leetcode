/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const ints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const strs = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let num = 0
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && strs.includes(s[i] + s[i + 1])) {
      const idx = strs.indexOf(s[i] + s[i + 1])
      num += ints[idx]
      i++
    } else {
      const idx = strs.indexOf(s[i])
      num += ints[idx]
    }
  }
  return num
}
