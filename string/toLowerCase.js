/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let ans = ''
  for (const c of str) {
    ans += String.fromCharCode(c.charCodeAt() | 32)
  }
  return ans
}
