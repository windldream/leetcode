/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  const len = s.length
  const stack = []
  for (let i = 0; i < len; i++) {
    if (stack.includes(s[i])) continue
    while (stack.length && s[i] < stack[stack.length - 1] && s.indexOf(stack[stack.length - 1], i) > -1) {
      stack.pop()
    }
    stack.push(s[i])
  }
  return stack.join('')
}

smallestSubsequence('cdadabcc')
