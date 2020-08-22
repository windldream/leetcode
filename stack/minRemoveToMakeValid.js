/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(')
    } else if (s[i] === ')') {
      if (stack.includes('(')) {
        let latestIndex = stack.lastIndexOf('(')
        stack[latestIndex] = '1'
        stack.push(')')
      }
    } else {
      stack.push(s[i])
    }
  }

  return stack
    .filter((c) => c !== '(')
    .map((c) => {
      if (c === '1') c = '('
      return c
    })
    .join('')
}
