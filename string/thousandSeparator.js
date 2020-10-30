/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  n = n + ''
  if (n.length < 4) return n
  let ans = ''
  for (let i = n.length; i >= 1; i -= 3) {
    ans = n.substring(i - 3 >= 0 ? i - 3 : 0, i) + '.' + ans
  }
  return ans.substring(0, ans.length - 1)
}
