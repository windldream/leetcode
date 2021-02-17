/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  let str
  for (const c of s) {
    switch (c) {
      case '(':
      case '{':
      case '[':
        stack.push(c)
        break
      case ')':
        str = stack.pop()
        if (str !== '(') return false
        break
      case '}':
        str = stack.pop()
        if (str !== '{') return false
        break
      case ']':
        str = stack.pop()
        if (str !== '[') return false
        break
    }
  }

  return stack.length === 0
}
