/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  const ops = ['+', '-', '*', '/']
  for (const token of tokens) {
    if (ops.includes(token)) {
      const b = stack.pop()
      const a = stack.pop()
      stack.push(operation(token, a, b))
    } else {
      stack.push(+token)
    }
  }
  return stack[0]

  function operation(op, a, b) {
    if (op === '+') return a + b
    if (op === '-') return a - b
    if (op === '*') return a * b
    if (op === '/') return ~~(a / b)
  }
}
