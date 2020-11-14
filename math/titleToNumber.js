/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let num = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    num += (s[i].charCodeAt() - 'A'.charCodeAt() + 1) * 26 ** (len - i - 1)
  }
  return num
}
