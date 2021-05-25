/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ')') {
      stack.push(s[i])
    } else {
      let str = ''
      while (stack.length && stack[stack.length - 1] !== '(') str += stack.pop()
      stack.pop()
      stack.push(...str)
    }
  }
  return stack.join('')
}

reverseParentheses('a(bcdefghijkl(mno)p)q')

// (u(love)i) => (uevoli) => iloveu
