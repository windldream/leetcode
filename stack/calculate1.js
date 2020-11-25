/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const priority = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1
  }
  const ops = []
  const stack = []
  const reg = /\d/
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue
    if (reg.test(s[i])) {
      let str = ''
      while (reg.test(s[i])) {
        str += s[i++]
      }
      i--
      stack.push(+str)
    } else if (s[i] === '(') {
      ops.push(s[i])
    } else if (s[i] === ')') {
      while (ops.length && ops[ops.length - 1] !== '(') {
        stack.push(ops.pop())
      }
      ops.pop()
    } else {
      while (ops.length && priority[s[i]] <= priority[ops[ops.length - 1]]) {
        stack.push(ops.pop())
      }
      ops.push(s[i])
    }
  }

  while (ops.length) {
    stack.push(ops.pop())
  }

  const ans = []
  for (let exp of stack) {
    if (reg.test(exp)) {
      ans.push(exp)
      continue
    }
    const a = ans.pop()
    const b = ans.pop()
    switch (exp) {
      case '*':
        ans.push(a * b)
        break
      case '/':
        ans.push(Math.trunc(b / a))
        break
      case '+':
        ans.push(a + b)
        break
      case '-':
        ans.push(b - a)
        break
    }
  }

  return ans[0]
}

calculate('2*(5+5*2)/3+(6/2+8)')
