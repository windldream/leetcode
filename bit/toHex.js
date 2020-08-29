/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return '0'
  const hex = '0123456789abcdef'
  let ans = ''
  while (num && ans.length < 8) {
    ans = hex[num & 15] + ans
    num >>= 4
  }
  return ans
}
