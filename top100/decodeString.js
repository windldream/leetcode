/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = []
  const reg = /\d/
  for (let i = 0; i < s.length; i++) {
    if (reg.test(s[i])) {
      let num = 0
      while (reg.test(s[i])) {
        num = num * 10 + +s[i++]
      }
      i--
      stack.push(num)
    } else if (s[i] === '[') {
      stack.push(s[i])
    } else if (s[i] === ']') {
      let str = ''
      while (stack.length && stack[stack.length - 1] !== '[') {
        str = stack.pop() + str
      }
      stack.pop()
      const count = stack.pop()
      stack.push(str.repeat(count))
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
}

decodeString('3[a]2[bc]')
