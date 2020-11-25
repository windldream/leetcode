/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function (expression) {
  const stack = []
  const len = expression.length
  let flag = false
  for (let i = len - 1; i >= 0; i--) {
    if (expression[i] === ':') {
      continue
    } else if (expression[i] === '?') {
      flag = true
    } else {
      if (flag) {
        if (expression[i] === 'T') {
          const first = stack.pop()
          stack.pop()
          stack.push(first)
        } else {
          stack.pop()
        }
        flag = false
      } else {
        stack.push(expression[i])
      }
    }
  }
  return stack[0]
}

parseTernary(
  'T?T?5:F?7:7:T?6:T?2:F?T:T?2:T?T?F?F?F?4:T?F?5:T?F:T?F?4:9:9:6:3:9:5:T?F?F?F?F?5:2:9:6:F?4:T?6:7:T?8:F?0:F?F?5:T?F:5:T?T?9:4:F?F?T?F?F?6:8:F:4:F?F?T?F:F?F?0:F?7:2:T?8:T?F?9:8:7:1:6:T?T?F?9:T?F?3:8:3:F:4'
)
