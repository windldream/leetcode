/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  const numReg = /\d/

  for (const token of tokens) {
    if (numReg.test(token)) {
      stack.push(+token)
    } else {
      stack.push(calculate(stack.pop(), stack.pop(), token))
    }
  }

  return stack[0]

  function calculate(num1, num2, op) {
    if (op === '+') return num2 + num1
    if (op === '-') return num2 - num1
    if (op === '*') return num2 * num1
    if (op === '/') return ~~(num2 / num1)
  }
}
