/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = []
  const strs = []
  let i = 0
  for (; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      let cur = ''
      while (/\d/.test(s[i])) {
        cur += s[i]
        i++
      }
      i--
      strs.push(cur)
    } else {
      if (stack.length === 0) {
        stack.push(s[i])
      } else if (s[i] === '(') {
        stack.push(s[i])
      } else if (s[i] === ')') {
        while (stack[stack.length - 1] !== '(') {
          strs.push(stack.pop())
        }
        stack.pop()
      } else if (s[i] === ' ') {
      } else {
        while (stack.length && getPrio(s[i]) <= getPrio(stack[stack.length - 1])) {
          strs.push(stack.pop())
        }
        stack.push(s[i])
      }
    }
  }

  while (stack.length) {
    strs.push(stack.pop())
  }

  const arr = []
  let a, b
  for (let i = 0; i < strs.length; i++) {
    switch (strs[i]) {
      case '+':
        a = parseInt(arr.pop())
        b = parseInt(arr.pop())
        arr.push(a + b)
        break
      case '-':
        a = parseInt(arr.pop())
        b = parseInt(arr.pop())
        arr.push(b - a)
        break
      default:
        arr.push(strs[i])
    }
  }

  return arr[0]

  function getPrio(op) {
    if (op === '*' || op === '/') {
      return 2
    }
    if (op === '+' || op === '-') {
      return 1
    }
    if (op === '(') {
      return 0
    }
  }
}
