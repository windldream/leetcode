/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  const stack = []
  const len = expression.length
  let i = 0
  while (i < len) {
    if (expression[i] === ')') {
      let ans = ''
      while (stack.length && stack[stack.length - 1] !== '(') {
        ans += stack.pop()
      }
      stack.pop()
      const op = stack.pop()
      ans = ans.replace(',', '')
      if (op === '!') {
        if (ans === 't') {
          ans = 'f'
        } else {
          ans = 't'
        }
      } else if (op === '&') {
        if (ans.includes('f')) {
          ans = 'f'
        } else {
          ans = 't'
        }
      } else if (op === '|') {
        if (ans.includes('t')) {
          ans = 't'
        } else {
          ans = 'f'
        }
      }
      stack.push(ans)
    } else if (expression[i] === ',') {
    } else {
      stack.push(expression[i])
    }
    i++
  }

  return stack[0] === 't'
}

parseBoolExpr('|(&(t,f,t),!(t))')
