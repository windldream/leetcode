/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = []
  backtracking(n, n, '')
  return ans

  function backtracking(l, r, s) {
    if (s.length === 2 * n) {
      ans.push(s)
      return
    }
    if (l > 0) backtracking(l - 1, r, s + '(')
    if (l < r) backtracking(l, r - 1, s + ')')
  }
}
