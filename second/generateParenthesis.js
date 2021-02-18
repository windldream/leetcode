/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = new Set()
  const visited = new Set()
  backtracking(n - 1, '()')
  return [...ans]

  function backtracking(n, str) {
    if (!check(str)) return
    if (n === 0) {
      ans.add(str)
      return
    }
    if (visited.has(str)) return
    for (let i = 0; i < str.length; i++) {
      const s = str.substring(0, i) + '(' + str.substring(i)
      for (let j = 0; j < s.length; j++) {
        backtracking(n - 1, s.substring(0, j) + ')' + s.substring(j))
      }
    }
    visited.add(str)
  }

  function check(str) {
    const stack = []
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        stack.push(str[i])
      } else {
        stack.pop()
      }
    }
    return stack.length === 0
  }
}

generateParenthesis(7)

// () => (()) => ()() =>
// (()) =>
